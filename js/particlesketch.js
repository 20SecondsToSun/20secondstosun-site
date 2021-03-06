
Math.radians = function (degrees)
{
    return degrees * Math.PI / 180.0;
}

function getRandom(min, max)
{
    return Math.random() * (max - min + 1) + min;
}

var Particle = function (location)
{
    this.location = location;
    this.w = getRandom(90.0, 10000.0);
    this.h = getRandom(90.0, 10000.0);
    this.r = getRandom(1.0, 3.0);
    this.s = getRandom(0.9, 5.0);
}

Particle.prototype.move = function (frameCount)
{
    var vel = new THREE.Vector3();
    vel.x =   Math.sin(Math.radians(this.w + frameCount * this.s)) * this.w;
    vel.y =   Math.cos(Math.radians(this.h + frameCount * this.s)) * this.h;
    vel.z =   0;
    vel.normalize();
    vel.multiplyScalar(this.s);
    this.location.add(vel);   
}

Particle.prototype.getVertex = function ()
{
    return this.location;
}

function renderSketch()
{
    if (!Detector.webgl)
    {
        document.getElementById('one').style.backgroundImage = "url(tech/image/title.jpg)";
        return;
    }

    var container, stats;
    var camera, scene, renderer, particles, geometry, materials, parameters, i, h, color;
    var particlesCount = 1000;

    var windowHalfX = window.innerWidth * 0.5;
    var windowHalfY = window.innerHeight * 0.5;

    var m = 2;
    var n = 3;
    var c = 10;
    var sphere, uniforms, attributes;
    var isLeftDown = false;
    var framecount = 0;

    init();
    animate();

    function init()
    {
        container = document.getElementById('sketchtitle');
      
        camera = new THREE.OrthographicCamera(-windowHalfX, windowHalfX, windowHalfY, -windowHalfY, -500, 1000);
        camera.position.z = 1000;

        scene        = new THREE.Scene();    
        geometry     = new THREE.Geometry();        
        particles    = new Array(particlesCount);

        for (var i = 0; i < particlesCount; i++)
        {
            var r = getRandom(300, 700);
            var vertex = new THREE.Vector3();

            vertex.x =   Math.sin(Math.radians(i)) * r;
            vertex.y =   Math.cos(Math.radians(i)) * r;            
            vertex.z = 0;

            particles[i] = new Particle(vertex);
            geometry.vertices.push(vertex);
        }

        parameters = [
            [[1, 1, 0.5], 10],
            [[0.95, 1, 0.5], 4],
            [[0.90, 1, 0.5], 3],
            [[0.85, 1, 0.5], 2],
            [[0.80, 1, 0.5], 1]
        ];

        materials = new THREE.ParticleBasicMaterial({
            color: 0x000000,
            size: 6,
            blending: THREE.AdditiveBlending,
            transparent: true
        });

        scene.add(new THREE.ParticleSystem(geometry, materials));

        renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        container.appendChild(renderer.domElement);
  
        window.addEventListener('resize', onWindowResize, false);
        renderer.setClearColor(0x000000, 1);
    }   

    function animate()
    {
        requestAnimationFrame(animate);
        render();
    }

    function render()
    {
        var time = Date.now() * 0.00005;       
        var vertices = geometry.vertices;
     
        for (i = 0; i < particlesCount; i++)
        {          
            particles[i].move(framecount);                    
        }
           
        geometry.verticesNeedUpdate = true;

        color = parameters[0][0];
        h = (360 * (color[0] + time) % 360) / 360;
        materials.color.setHSL(h, color[1], color[2]);

        renderer.render(scene, camera);
        framecount += 1;
    }

    function onWindowResize()
    {
        windowHalfX = window.innerWidth * 0.5;
        windowHalfY = window.innerHeight * 0.5;

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);       
    }
}

function renderSketch()
{
   // return;
    if (!Detector.webgl)
    {
       // Detector.addGetWebGLMessage();
        document.getElementById('one').style.backgroundImage = "url(tech/image/title.jpg)";
    }
   
   //return;

    var container, stats;
    var camera, scene, renderer, particles, geometry, materials, parameters, i, h, color;
    var mouseX = 0, mouseY = 0;
    var mousePressed = false;
    var particlesCount = 30000;

    var windowHalfX = window.innerWidth * 0.5;
    var windowHalfY = window.innerHeight * 0.5;

    var m = 2;
    var n = 3;
    var c = 10;
    var sphere, uniforms, attributes;
    var isLeftDown = false;

    init();
    animate();

    function init() {
           
        // container = document.createElement('div');
        container = document.getElementById('sketchtitle');
        // document.body.appendChild(container);

        camera = new THREE.OrthographicCamera(-window.innerWidth * 0.5, window.innerWidth * 0.5, window.innerHeight * 0.5, -window.innerHeight * 0.5, -500, 1000);
        camera.position.z = 1000;

        scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0xffffff, 0.0007);

        geometry = new THREE.Geometry();

        for (i = 0; i < particlesCount; i++) {
            var vertex = new THREE.Vector3();
            vertex.x = Math.random() * window.innerWidth - windowHalfX;
            vertex.y = Math.random() * window.innerHeight - windowHalfY;
            //vertex.z = 0;
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
            size: 2,//20
            //map: THREE.ImageUtils.loadTexture(
            //   "tech/Image/spark1.png"
            //  ),
            blending: THREE.AdditiveBlending,
            transparent: true
        });

        //  materials = new THREE.MeshBasicMaterial({ color: 0x00ff00 });


        particles = new THREE.ParticleSystem(geometry, materials);
        scene.add(particles);


        renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        container.appendChild(renderer.domElement);

        document.addEventListener('mousemove', onDocumentMouseMove, false);
        document.addEventListener('mousedown', onDocumentMouseDown, false);
        document.addEventListener('mouseup', onDocumentMouseUp, false);

        //

        window.addEventListener('resize', onWindowResize, false);

        renderer.setClearColor(0x000000, 1);
    }

    function onWindowResize() {
        windowHalfX = window.innerWidth * 0.5;
        windowHalfY = window.innerHeight * 0.5;

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function onDocumentMouseMove(event) {
        mouseX = event.clientX - windowHalfX;
        mouseY = -(event.clientY - windowHalfY);
    }

    function onDocumentMouseDown(event) {
        switch (event.button) {
            case 0: // left
                isLeftDown = true;
                break;
            case 1: // middle

                break;
            case 2: // right
                isLeftDown = false;
                break;
        }
        mousePressed = true;
    }

    function onDocumentMouseUp(event) {
        mousePressed = false;
    }

    function animate() {
        requestAnimationFrame(animate);
        render();
    }

    function render() {

        var time = Date.now() * 0.00005;

        if (mousePressed) {
            var vertices = geometry.vertices;


            for (i = 0; i < vertices.length; i++)//scene.children.length; i ++ )
            {

                var mx = vertices[i].x - mouseX;
                var my = vertices[i].y - mouseY;
                var a = new THREE.Vector2(vertices[i].x / m, vertices[i].y / m);
                var b = new THREE.Vector2(mouseX / m, mouseY / m);

                var r = a.distanceTo(b);
                var tx = 0;
                var ty = 0;
                if (isLeftDown == true) {
                    tx = Math.cos(1 / r * n) * mx - Math.sin(1 / r * n) * my;
                    ty = Math.sin(1 / r * n) * mx + Math.cos(1 / r * n) * my;
                } else {
                    tx = Math.cos(-1 / r * n) * mx - Math.sin(-1 / r * n) * my;
                    ty = Math.sin(-1 / r * n) * mx + Math.cos(-1 / r * n) * my;
                }
                tx += mouseX;
                ty += mouseY;

                vertices[i].x = tx;
                vertices[i].y = ty;


                if (vertices[i].x > window.innerWidth * 0.5) {
                    vertices[i].x = -window.innerWidth * 0.5;
                }
                else if (vertices[i].x < -window.innerWidth * 0.5) {
                    vertices[i].x = window.innerWidth * 0.5;
                }


                if (vertices[i].y > window.innerHeight * 0.5) {
                    vertices[i].y = -window.innerHeight * 0.5;
                }
                else if (vertices[i].y < -window.innerHeight * 0.5) {
                    vertices[i].y = window.innerHeight * 0.5;
                }


            }
        }

        geometry.verticesNeedUpdate = true;


        color = parameters[0][0];

        h = (360 * (color[0] + time) % 360) / 360;
        materials.color.setHSL(h, color[1], color[2]);


        renderer.render(scene, camera);
    }

}

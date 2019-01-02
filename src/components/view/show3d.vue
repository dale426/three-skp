<template>
    <div class="first-page">
        <div class="linebox">
            <div class="box-3d">
                <img class="logo-text" src="../../assets/page1-02.png" alt="logo">
                <div class="mode-title">
                    <p>赛可平</p>
                    <p>吗替麦考酚酯分散片</p>
                </div>
                <div id="model3d" class="model3d"></div>

                <div class="open-item">
                    <div class="right-angle"></div>
                    <div>OPEN >></div>
                    <div class="right-angle"></div>
                </div>
            </div>
        </div>
        <!-- <div class="mode3d-title"></div> -->

        <div class="menu">
            <Menu showRow></Menu>
            <div></div>
        </div>
    </div>
</template>
<script>
// import * as THREE from "three";
import initOrbitControls from "three-orbit-controls";
import * as OBJLoader from "three-obj-loader";
import MTLLoader from "three-mtl-loader";
import Menu from '@/components/commonComponents/Menu';
const THREE = require("three");

OBJLoader(THREE);
const {
    WebGLRenderer,
    Scene,
    PerspectiveCamera,
    DirectionalLight,
    Color,
    Vector3
    /* Raycaster,
    TextureLoader,
    MeshBasicMaterial,
    BackSide,
    Mesh,
    CubeGeometry,
    MeshFaceMaterial,
    DoubleSide,
    JSONLoader,
    Group,
    Geometry,
    PointsMaterial,
    AddEquation,
    Points,
    Vector2,
    MeshLambertMaterial,
    LensFlare,
    AdditiveBlending,
    ShaderMaterial */
} = THREE;
const OrbitControls = initOrbitControls(THREE);

export default {
    name: "Show3d",
    data() {
        return {};
    },
    components: {Menu},
    mounted() {
        let reFontSize = parseInt(window.document.getElementsByTagName('html')[0].style.fontSize.split('px')[0]) || 0
        let realHeight = 300 / 41.4 * reFontSize
        const defaultOptions = {
            width: window.innerWidth - 40,
            height: window.innerHeight - realHeight,
            element: document.body,
            pixelRatio: window.devicePixelRatio,
            debugMode: false
        };
        this.options = Object.assign({}, defaultOptions);
        this.animate = this.animate.bind(this);
        this.initThreejs();
        this.initSence();
        this.initCamera();
        this.initLight();
        this.initMtl();
        this.initControl();
        this.animate();
        this.render();
    },
    methods: {
        // 初始化three.js
        initThreejs() {
            const renderer = (this.renderer = new WebGLRenderer({ alpha: true, antialias: true }));
            let el = document.getElementById("model3d");
            // renderer.setSize(this.options.width, this.options.height);
            renderer.setSize(this.options.width, this.options.height);

            renderer.setPixelRatio(this.options.pixelRatio);
            el.appendChild && el.appendChild(renderer.domElement);
            //   this.options.element.appendChild &&
            //     this.options.element.appendChild(renderer.domElement);
        },
        // 初始化场景
        initSence() {
            const scene = (this.scene = new Scene());
            // scene.background = new Color(0xffffff);
        },
        // 初始化相机
        initCamera() {
            const camera = (this.camera = new PerspectiveCamera(
                10,
                this.options.width / this.options.height,
                1,
                10000
            ));
            camera.position.set(-40, 50, 90);
            // camera.position.z = 250;
            camera.lookAt(new Vector3(0, 0, 0));
            this.scene.add(camera);
        },

        initLight() {
            // 环境光
            var ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
            this.scene.add(ambientLight);

            // 平行光
            const light = (this.light = new DirectionalLight());
            light.position.set(50, 100, 200);

            // 点光
            const pointLight = new THREE.PointLight(0xfefefe, 0.8);
            pointLight.position.set(0, 200, 200)
            // pointLight.distance = 50
            this.camera.add(light);
        },
        // 材质模型加载
        initMtl() {
            let scene = this.scene;
            // 加载进度
            var onProgress = function (xhr) {
                if (xhr.lengthComputable) {
                    var percentComplete = xhr.loaded / xhr.total * 100;
                    console.log(percentComplete);
                }
            };

            var onError = function (xhr) { };

            // THREE.Loader.Handlers.add( /\.dds$/i, new THREE.DDSLoader() );
            const mtlLoader = new MTLLoader();
            mtlLoader.setPath("static/obj/markobj/");
            mtlLoader.load("MTMK.mtl", function (materials) {
                materials.preload();
                var objLoader = new THREE.OBJLoader();
                objLoader.setMaterials(materials);
                objLoader.setPath("static/obj/markobj/");
                objLoader.load(
                    "MTMK.obj",
                    function (object) {
                        // object.position.y = -0.5;
                        // object.position.y = - 95;
                        scene.add(object);
                    },
                    onProgress,
                    onError
                );
            });
        },
        initControl() {
            const controls = (this.controls = new OrbitControls(this.camera, this.renderer.domElement));
            controls.target = new THREE.Vector3(0, 0, 0); // 控制焦点
            // 最大仰视角和俯视角
            controls.maxPolarAngle = Math.PI;
            controls.minPolarAngle = 0;
            controls.rotateSpeed = 1.0;
            controls.zoomSpeed = 2;
            controls.panSpeed = 2;
            controls.onZoom = false;
            controls.enablePan = false;
            controls.enableDamping = true;
            controls.dampingFactor = 0.3;
            // 最大最小相机移动距离(景深相机)
            controls.minDistance = 40;
            controls.maxDistance = 120;
        },

        animate() {
            window.requestAnimationFrame(this.animate);
            this.controls.update();
            this.render();
        },

        render() {
            this.renderer.render(this.scene, this.camera);
        }
    }
};
</script>
<style lang="less">
.mode3d-title{
    height: 60px;
    z-index: 999;
}
.model3d{
    // height: 400px;
    background: url('../../assets/page1-03.png') center no-repeat;
    background-size: 350px 350px;
}
.first-page{
    height: 100%;
    position: relative;
    background: url('../../assets/bac001.png');
    background-size: cover;
    
    .linebox{
        position: absolute;
        height: 100%;
        width: 100%;
        padding: 20px;
        padding-bottom: 140px;
    }
    .menu{
        position: absolute;
        bottom: 60px;
        display: block;
        width: 100%;
    }
    .box-3d{
        position: relative;
        width: 100%;
        height: 100%;
        background: url('../../assets/page1-01.png') center no-repeat;
        background-size: 100% 100%;
        .logo-text{
            position: absolute;
            top: 10px;
            right: 10px;
            width: 60px;
            height: 20px;
            z-index: 2
        }
        .mode-title{
            padding: 20px 0;
            p{
                text-align: center;
                font-size: 28px;
            }
        }
    }

    .open-item{
        display: flex;
        color: #5defe0;
        justify-content: space-between;
        padding: 0 26px;
        font-size: 20px;
        width: 100%;
        .right-angle{
            width: 24px;
            height: 24px;
            border-left: 3px solid #5defe0;
            border-bottom: 3px solid #5defe0;
        }
        .right-angle:last-child{
            border-right: 3px solid #5defe0;
            border-left: none;
        }
    }
}
</style>

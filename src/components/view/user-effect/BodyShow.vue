<template>
    <div class="first-page">
        <div class="linebox">
            <div class="box-3d">
                <div id="model3d" class="model3d"></div>
            </div>
        </div>
    </div>
</template>
<script>
// import * as THREE from "three";
import initOrbitControls from "three-orbit-controls";
import * as OBJLoader from "three-obj-loader";
import MTLLoader from "three-mtl-loader";
import Menu from '@/components/commonComponents/Menu';
import RowIcon from '@/components/commonComponents/RowIcon';
import {createDecoderModule} from 'draco3d';
const THREE = require("three");
// import DracoDecoderModule from '@/utils/draco_decoder.js';
console.log('createDecoderModule', createDecoderModule);

OBJLoader(THREE);
const {
    WebGLRenderer,
    Scene,
    PerspectiveCamera,
    DirectionalLight,
    Vector3
} = THREE;
const OrbitControls = initOrbitControls(THREE);

export default {
    name: "bodyShow",
    data() {
        return {};
    },
    components: { Menu, RowIcon },
    mounted() {
        // let reFontSize = parseInt(window.document.getElementsByTagName('html')[0].style.fontSize.split('px')[0]) || 0
        // let realHeight = 300 / 41.4 * reFontSize
        const defaultOptions = {
            width: window.innerWidth - 80,
            // height: window.innerHeight - realHeight,
            height: window.innerHeight - 80,
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

        // this.initDecoder();
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
            this.scene = new Scene();
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
            mtlLoader.load("girl004.mtl", function (materials) {
                materials.preload();
                var objLoader = new THREE.OBJLoader();
                objLoader.setMaterials(materials);
                objLoader.setPath("static/obj/markobj/");
                objLoader.load(
                    "girl004.obj",
                    function (object) {
                        object.position.y = -5;
                        // object.position.y = -95;
                        scene.add(object);
                    },
                    onProgress,
                    onError
                );
            });
            mtlLoader.load("girl004.mtl", function (materials) {
                materials.preload();
                var objLoader = new THREE.OBJLoader();
                objLoader.setMaterials(materials);
                objLoader.setPath("static/obj/markobj/");
                objLoader.load(
                    "girl004.obj",
                    function (object) {
                        // object.position.y = -5;
                        // object.position.y = -95;
                        scene.add(object);
                    },
                    onProgress,
                    onError
                );
            });
        },
        initDecoder() {
            let scene = this.scene;

            // (Optional) Change decoder source directory (defaults to './').
            THREE.DRACOLoader.setDecoderPath('static/obj/markobj/');

            // (Optional) Use JS decoder (defaults to WebAssembly if supported).
            THREE.DRACOLoader.setDecoderConfig({ type: 'js' });

            // (Optional) Pre-fetch decoder source files (defaults to load on demand).
            THREE.DRACOLoader.getDecoderModule();

            var dracoLoader = new THREE.DRACOLoader();

            dracoLoader.load('girl005.drc', function (geometry) {
                scene.add(new THREE.Mesh(geometry));

                // (Optional) Release the cached decoder module.
                THREE.DRACOLoader.releaseDecoderModule();
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
</style>

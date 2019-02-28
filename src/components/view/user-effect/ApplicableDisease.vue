<template>
    <div class="applicable-disease">
        <div class="advance-content">
            <AdvanceTitle title="适用疾病" sub-title="Applicable disease"></AdvanceTitle>
            <div class="wrap-disease-body">
                    <div class="departments-list">
                        <div class="select-departs-item">
                            选择科室
                            <svg class="triganle" width="9" height="4">
                                <polygon points="0,6 5,0 10,6" fill="#5defe0" stroke="#5defe0"></polygon>
                            </svg>
                        </div>
                        <ul>
                            <li
                                class="departments-list-item"
                                v-for="item in illList"
                                :key="item.id"
                                :class="currIndex === item.id ? 'active' : ''"
                                @click="changeDepartmentsHandler(item)"
                            >{{item.name}}</li>
                        </ul>
                    </div>
                    <div class="humen-body">
                        <!-- 风湿免疫科 -->
                        <div class="wrap-circle fsmyk" id="girl-3d">
                            <!-- <img class="red-circle" src=".././../../assets/red-circle.png" alt="" style="opacity: 0.8">
                                <img class="red-circle" src=".././../../assets/red-circle.png" alt="" style="opacity: 0.8">
                            <img class="red-circle" src=".././../../assets/red-circle.png" alt="" style="opacity: 0.8">-->
                        </div>
                    </div>
            </div>
        </div>
        <div class="menu">
            <Menu></Menu>
        </div>
    </div>
</template>
<script>
import initOrbitControls from "three-orbit-controls";
import * as OBJLoader from "three-obj-loader";
import MTLLoader from "three-mtl-loader";
import AdvanceTitle from '../advantage/components/AdvaceTitle.vue';
import Menu from '@/components/commonComponents/Menu';
import simpleBody from '@/assets/simple-body.png';
const THREE = require("three");
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
    name: 'applicable-disease',
    data() {
        return {
            isMasterPage: true,
            currIndex: null,
            simpleBody,
            illList: [
                {
                    name: '器官移植',
                    id: 0
                }, {
                    name: '风湿免疫科',
                    id: 1,
                }, {
                    name: '消化科',
                    id: 2
                }, {
                    name: '血液科',
                    id: 3
                }, {
                    name: '神经内科',
                    id: 4
                }, {
                    name: '肾内科',
                    id: 5
                }, {
                    name: '皮肤科',
                    id: 6
                }]
        }
    },
    components: { AdvanceTitle, Menu },
    mounted() {
        // let reFontSize = parseInt(window.document.getElementsByTagName('html')[0].style.fontSize.split('px')[0]) || 0
        // let realHeight = 300 / 41.4 * reFontSize
        const defaultOptions = {
            width: document.getElementById('girl-3d').clientWidth,
            // height: window.innerHeight - realHeight,
            height: document.getElementById('girl-3d').clientHeight,
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
        changeDepartmentsHandler(item) {
            this.currIndex = item.id
            this.$router.push({ path: item.route })
        },
        // 初始化three.js
        initThreejs() {
            const renderer = (this.renderer = new WebGLRenderer({ alpha: true, antialias: true }));
            let el = document.getElementById("girl-3d");
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
            camera.position.set(-10, 10, 40);
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
            var _this = this
            var onProgress = function (xhr) {
                if (xhr.lengthComputable) {
                    var percentComplete = xhr.loaded / xhr.total * 100;
                    console.log(percentComplete);
                    _this.persent = Math.round(percentComplete)
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
                        // object.position.y = -5;
                        // object.position.y = -95;
                        scene.add(object);
                    },
                    onProgress,
                    onError
                );
            });
        },
        initControl() {
            const controls = (this.controls = new OrbitControls(this.camera, this.renderer.domElement));
            controls.target = new THREE.Vector3(0, 2, 0); // 控制焦点
            // 最大仰视角和俯视角
            controls.maxPolarAngle = Math.PI / 2;
            controls.minPolarAngle = Math.PI / 2;
            controls.rotateSpeed = 1.0;
            controls.zoomSpeed = 2;
            controls.panSpeed = 2;
            controls.onZoom = false;
            controls.enablePan = false;
            controls.enableDamping = true;
            controls.dampingFactor = 0.3;
            // 最大最小相机移动距离(景深相机)
            controls.minDistance = 20;
            controls.maxDistance = 60;
        },

        animate() {
            window.requestAnimationFrame(this.animate);
            this.controls.update();
            this.render();
        },

        render() {
            this.renderer.render(this.scene, this.camera);
        }
    },
    watch: {
        $route: {
            handler: function (val, oldVal) {
                console.log(val);
                if (val.name === 'applicable-disease') {
                    this.isMasterPage = true
                } else {
                    this.isMasterPage = false
                }
            },
            // 深度观察监听
            deep: true
        }
    }
}
</script>
<style lang="less">
.applicable-disease {
    width: 100%;
    background: url("../../../assets/advance-002.png") center no-repeat;
    background-size: cover;
    color: #5defe0;
    .advance-content {
        overflow-y: hidden;
        display: flex;
        flex-direction: column;
        padding: 0 30px 90px;
        justify-content: space-between;
        height: 100%;
    }
    .wrap-disease-body {
        display: flex;
        flex-grow: 1;
        align-items: center;
        justify-content: center;
    }
    .departments-list-item {
        height: 18px;
        line-height: 18px;
        font-size: 16px;
        padding: 4px 0 4px 20px;
        width: 100px;
        text-align: left;
        margin-top: 6px;
        box-sizing: content-box;
    }
    .departments-list-item.active {
        border: 1px solid #5defe0;
    }
    .humen-body {
        position: relative;
        width: 210px;
        height: 510px;
        // .fsmyk {
        //     .red-circle:nth-child(1) {
        //         top: 136px;
        //         left: 76px;
        //     }
        //     .red-circle:nth-child(2) {
        //         top: 214px;
        //         left: 114px;
        //     }
        //     .red-circle:nth-child(3) {
        //         top: 290px;
        //         left: 70px;
        //     }
        // }
    }
    .wrap-circle {
        position: absolute;
        width: 100%;
        height: 100%;
        .red-circle {
            position: absolute;
            width: 30px;
            height: 30px;
            animation: redGlint 1.5s infinite;
            animation-direction: alternate;
        }
        @keyframes redGlint {
            from {
                opacity: 0;
            }
            to {
                opacity: 0.8;
            }
        }
    }
    .menu {
        position: absolute;
        bottom: 60px;
        display: block;
        width: 100%;
    }
    .select-departs-item {
        display: flex;
        align-items: center;
        margin-bottom: 15px;
        .triganle {
            margin-left: 2px;
            transform: rotate(180deg);
        }
    }
    .detail-components-wrap {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .office-menu-opacity {
        opacity: 0.1;
    }
}
</style>

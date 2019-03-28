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
                            v-for="item in illMenuList"
                            :key="item.id"
                            :class="currType === item.id ? 'active' : ''"
                            @click="changeDepartmentsHandler(item)"
                        >{{item.name}}</li>
                    </ul>
                </div>
                <div class="humen-body">
                    <!-- 风湿免疫科 -->
                    <div v-if="persent !== 100" class="persent">加载中 - {{persent}}%</div>
                    <div class="wrap-circle fsmyk" id="girl-3d">
                        <!-- <img class="red-circle" src=".././../../assets/red-circle.png" alt="" style="opacity: 0.8">
                                <img class="red-circle" src=".././../../assets/red-circle.png" alt="" style="opacity: 0.8">
                        <img class="red-circle" src=".././../../assets/red-circle.png" alt="" style="opacity: 0.8">-->
                    </div>
                    <div class="ill-descrip" v-if="isMasterPage">
                        <section class="sickness">
                            <p>{{ illDesList[currType][currIndex].title }}</p>
                            <div class="sickness__description">
                                <span
                                    v-if="illDesList[currType][currIndex].description.length"
                                >指南推荐：</span>
                                <p
                                    v-for="(item, index) in illDesList[currType][currIndex].description"
                                    :key="index"
                                >{{item}}</p>
                                <!-- <p>《EULAR/ERA-EDTA成人及</p>
                                <p>&nbsp;&nbsp;儿童狼疮性肾炎的管理建议（2012版）》</p>
                                <p>《系统性红斑狼疮诊断及治疗指南（2010版）》</p>-->
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
        <div class="menu">
            <Menu></Menu>
        </div>
        <div v-if="isMasterPage" class="masker">
            <div>
                <svg width="36" height="36" @click="nextPageHandler">
                    <circle cx="18" cy="18" r="16" stroke="#5defe0" stroke-width="2" fill="none"></circle>
                    <polyline points="14 10 26 18 14 26" stroke="#5defe0" stroke-width="2"></polyline>
                </svg>
            </div>
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
import { illDesList } from './components/illList.js';
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
            sprite: null, // 球体对象
            sprite2: null,
            persent: 0,
            mtl: null,
            isMasterPage: false,
            illDesList,
            currIndex: 0,
            currType: null,
            simpleBody,
            illMenuList: [
                {
                    name: '风湿免疫科',
                    id: 'fsmyk'
                }, {
                    name: '消化科',
                    id: 'xhk'
                }, {
                    name: '血液科',
                    id: 'xyk'
                }, {
                    name: '神经内科',
                    id: 'sjnk'
                }, {
                    name: '肾内科',
                    id: 'snk'
                }, {
                    name: '皮肤科',
                    id: 'pfk'
                }]
        }
    },
    components: { AdvanceTitle, Menu },
    mounted() {
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
            if (this.persent !== 100) {
                return;
            }
            this.isMasterPage = true
            this.currType = item.id
            this.currIndex = 0
            this.changeCarame()
        },
        changeCarame() {
            let arr = illDesList[this.currType][this.currIndex].carame
            this.camera.position.set(arr[0], arr[1], arr[2]);
            if (this.currType === 'sjnk' && (this.currIndex === 0 || this.currIndex === 2)) {
                // this.mtl.position.y = -1
            } else {
                if (this.persent === 100) {
                    this.mtl.position.y = 0
                }
            }
            this.addRedCircle()
        },
        nextPageHandler() {
            let { currIndex, currType, illDesList } = this
            if (illDesList[currType].length - 1 > currIndex) {
                this.currIndex++
                this.changeCarame()
            } else {
                this.isMasterPage = false
                this.currIndex = 0
                this.camera.position.set(0, 20, 20);
                console.log('this.sprite2', this.sprite2);
                
                        this.sprite2 ? this.sprite2.remove() : null

                if (this.persent === 100) {
                    this.mtl.position.y = 0
                }
            }
        },
        async addRedCircle() {
            let { currIndex, currType, illDesList } = this
            if(!this.sprite) {
                this.initSun();
            }

            let sprite = this.sprite
            switch (currType) {
                case 'fsmyk':
                    if (currIndex === 1) {
                        sprite.material.visible = true
                        sprite.position.set(-0.18, 2.36, 0.2)
                    } else if (currIndex === 2) {
                        this.mtl.position.y = -0.5
                        sprite.position.set(-0.18, 2.5, 0.26)
                    } else {
                        sprite.material.visible = false
                    };

                    break;
                case 'xhk':
                        sprite.material.visible = true
                        sprite.position.set(-0.16, 2.6, 0.2);
                    break;
                case 'xyk':
                if(currIndex === 1) {
                    sprite.material.visible = true
                    sprite.position.set(0, 2.7, -0.25);
                } else {
                    sprite.material.visible = false
                };
                    break;
                case 'sjnk':
                    if (currIndex === 0) {
                        sprite.material.visible = true
                        this.mtl.position.y = -1;
                        sprite.position.set(-0.11, 2.7, 0.12);
                    } else if (currIndex === 2) {
                        sprite.material.visible = true
                        this.mtl.position.y = -1.4;
                        sprite.position.set(-0.05, 2.4, 0.14);
                    } else if (currIndex === 3) {
                        this.mtl.position.y = -0.4;
                        this.mtl.position.x = -0.1;
                        sprite.position.set(0.38, 2.9, -0.1);
                        let sprite2 = this.sprite2 = sprite.clone()
                        sprite.position.set(0.7, 1.9, -0.1);
                        this.scene.add(sprite2)
                        sprite.material.visible = true
                    } else {
                        sprite.material.visible = false
                    }
                    break;
                case 'snk':
                        sprite.material.visible = true
                        sprite.position.set(-0.18, 2.3, 0.2);
                    break;
                case 'pfk':
                        sprite.material.visible = false
                    break;

            }

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
            /* const scene =  */this.scene = new Scene();
            // scene.background = new Color(0xe62f4d, 0.2);
        },
        // 初始化相机
        initCamera() {
            const camera = (this.camera = new PerspectiveCamera(
                10,
                this.options.width / this.options.height,
                1,
                10000
            ));
            camera.position.set(0, 20, 20);
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
            pointLight.position.set(10, 10, 10)
            pointLight.distance = 100

            this.camera.add(pointLight);
            this.camera.add(light);
        },
        initSun() {
            var spriteMap = new THREE.TextureLoader().load("static/red-circle.png");
            // 设置材质属性
            var spriteMaterial = new THREE.SpriteMaterial({ map: spriteMap, color: 0xffffff, opacity: 0.2 });
            var i = 0
            setInterval(() => {
                i++;
                i >= 10 ? i = 1 : null;
                // 修改材质属性
                spriteMaterial.setValues({ opacity: i / 10 })
            }, 300)
            var sprite = new THREE.Sprite(spriteMaterial);
            var x = 0.30
            sprite.scale.set(x, x, x)
            sprite.material.visible = false
            this.scene.add(sprite);
            this.sprite = sprite;
            // sprite.position.set(0, 2.5, 0.2)
            // this.scene.add(sprite);
        },
        // 材质模型加载
        initMtl() {
            let scene = this.scene;
            // 加载进度
            var _this = this
            var onProgress = function (xhr) {
                if (xhr.lengthComputable) {
                    var percentComplete = xhr.loaded / xhr.total * 100;
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
                        _this.mtl = object
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
            controls.minDistance = 12;
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
        width: 260px;
        height: 510px;
        z-index: 11;
        .persent {
            text-align: center;
            color: #5defe0;
            margin-top: 99%;
        }
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

    .ill-descrip {
        margin-top: 180px;
        position: relative;
        z-index: 12;
        width: calc(~"100vw - 30px");
        margin-left: calc(~"300px - 100vw");
        .sickness {
            text-align: left;
            & > p {
                font-size: 16px;
                font-weight: bold;
            }
            .sickness__description {
                margin-top: 30px;
                font-size: 15px;
                font-weight: 600;
                p:first-child {
                    margin-top: 6px;
                }
                p {
                    background: rgba(5, 13, 48, 0.5);
                    padding: 2px;
                    font-size: 14px;
                    font-weight: 100;
                }
            }
        }
    }

    .masker {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #041525;
        opacity: 0.9;
        display: flex;
        flex-direction: column-reverse;
        padding-bottom: 40px;
    }

    a {
        color: #e62f4d;
    }
}
</style>

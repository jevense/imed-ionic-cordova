import {SubjectAction} from "./SubjectAction";
import {Subject} from "../../Subject";

const subjects = {
  "orthodontics": {
    "bank": {
      "extendId": "4028b88168ffeec00168ffeecc310015",
      "price": "680",
      "id": "033cf99ebd324091a47980c3a9947552",
      "status": true
    },
    "search": {
      "price": "",
      "id": "",
      "status": false
    },
    "disease": {
      "price": "600",
      "id": "c09976ef5d074c8d9228bc497e9c9f8e",
      "status": true
    },
    "paper": {
      "extendId": "4028b88168ffeec00168ffeecc310015",
      "price": "880",
      "id": "4fe619ac7416474393cc7285305605fc",
      "status": true
    },
    "course": {
      "price": "",
      "id": "",
      "status": false
    },
    "video": {
      "price": "1380",
      "id": "87edfd0d43e1428a9bdb6c665ae2b316",
      "status": true
    }
  },
  "internal": {
    "bank": {
      "extendId": "4028b88168ffeec00168ffeecc2f0003",
      "price": "1280",
      "id": "dc4270996b5a4f6db0730616d572ab67",
      "status": true
    },
    "search": {
      "price": "",
      "id": "",
      "status": false
    },
    "disease": {
      "price": "",
      "id": "",
      "status": false
    },
    "paper": {
      "extendId": "4028b88168ffeec00168ffeecc2f0003",
      "price": "2280",
      "id": "1865211a14cb4951b8d369cfed822a3d",
      "status": true
    },
    "course": {
      "price": "",
      "id": "",
      "status": false
    },
    "video": {
      "price": "2980",
      "id": "e3857d8c19b348568ff82afe6a92f325",
      "status": true
    }
  },
  "orthopaedics": {
    "bank": {
      "extendId": "4028b88168ffeec00168ffeecc310010",
      "price": "980",
      "id": "862e5f79e5294051bc8552572712b5d9",
      "status": true
    },
    "search": {
      "price": "",
      "id": "",
      "status": false
    },
    "disease": {
      "price": "",
      "id": "",
      "status": false
    },
    "paper": {
      "extendId": "4028b88168ffeec00168ffeecc310010",
      "price": "1480",
      "id": "f9f5c24f1dc0438ea3142cafa81aa3c2",
      "status": true
    },
    "course": {
      "price": "",
      "id": "",
      "status": false
    },
    "video": {
      "price": "1380",
      "id": "93b85f810d914899ac72d039cacf5eb0",
      "status": true
    }
  },
  "pathology": {
    "bank": {
      "extendId": "4028b88168ffeec00168ffeecc310016",
      "price": "680",
      "id": "78b2356c8ec0479e91e9ab0b386c7d48",
      "status": true
    },
    "search": {
      "price": "",
      "id": "",
      "status": false
    },
    "disease": {
      "price": "600",
      "id": "ab78f345d93848f6987732c072d89ba2",
      "status": true
    },
    "paper": {
      "extendId": "4028b88168ffeec00168ffeecc310016",
      "price": "880",
      "id": "b642018cde604e95b0b7491bccf1ed6f",
      "status": true
    },
    "course": {
      "price": "",
      "id": "",
      "status": false
    },
    "video": {
      "price": "1380",
      "id": "ed5b001b1c9d423f9bcada8715ca6bed",
      "status": true
    }
  },
  "maxillofacialimaging": {
    "bank": {
      "extendId": "4028b88168ffeec00168ffeecc310014",
      "price": "680",
      "id": "a9a69610dad04e26804d070b3c922bdc",
      "status": true
    },
    "search": {
      "price": "",
      "id": "",
      "status": false
    },
    "disease": {
      "price": "600",
      "id": "93871d630034469dad697c23e4e0c4e7",
      "status": true
    },
    "paper": {
      "extendId": "4028b88168ffeec00168ffeecc310014",
      "price": "880",
      "id": "978b91ea042a43e7a6e88b6913db641c",
      "status": true
    },
    "course": {
      "price": "",
      "id": "",
      "status": false
    },
    "video": {
      "price": "1380",
      "id": "0636bcd2e1c84fca8ce51bd3714c8518",
      "status": true
    }
  },
  "emergency": {
    "bank": {
      "extendId": "4028b8816897ae62016897ae724d0009",
      "price": "1280",
      "id": "174cda0482604b418647a15d1eeec737",
      "status": true
    },
    "search": {
      "price": "",
      "id": "",
      "status": false
    },
    "disease": {
      "price": "",
      "id": "",
      "status": false
    },
    "paper": {
      "extendId": "4028b8816897ae62016897ae724d0009",
      "price": "1480",
      "id": "8613bd66f09f485581235b3bb66759ff",
      "status": true
    },
    "course": {
      "price": "",
      "id": "",
      "status": false
    },
    "video": {
      "price": "1380",
      "id": "6cc395c76a9e4223bf38b8386785a871",
      "status": true
    }
  },
  "gynaecology": {
    "bank": {
      "extendId": "4028b88168ffeec00168ffeecc280000",
      "price": "1280",
      "id": "dc77f7f20edb4753816ddd6fb6aeaf7a",
      "status": true
    },
    "search": {
      "price": "",
      "id": "",
      "status": false
    },
    "disease": {
      "price": "1600",
      "id": "f9d02544f53d4f8491f9acc22429172a",
      "status": true
    },
    "paper": {
      "extendId": "4028b88168ffeec00168ffeecc280000",
      "price": "2280",
      "id": "bca46856a3bf45a89c1fadb4aebb628f",
      "status": true
    },
    "course": {
      "price": "",
      "id": "",
      "status": false
    },
    "video": {
      "price": "2280",
      "id": "7971b7dd2da44d108ed0701c030f37e1",
      "status": true
    }
  },
  "psychiatry": {
    "bank": {
      "extendId": "4028b88168ffeec00168ffeecc32001a",
      "price": "680",
      "id": "578206a992bc4ba0938a241d711722c4",
      "status": true
    },
    "search": {
      "price": "",
      "id": "",
      "status": false
    },
    "disease": {
      "price": "300",
      "id": "41397229a5084e278c7e0d897a5152ee",
      "status": true
    },
    "paper": {
      "extendId": "4028b88168ffeec00168ffeecc32001a",
      "price": "1480",
      "id": "ff4490cd20b74c22b9444ba061c8e4a1",
      "status": true
    },
    "course": {
      "price": "",
      "id": "",
      "status": false
    },
    "video": {
      "price": "880",
      "id": "5b4de977a9484cf999548d5963aaaada",
      "status": true
    }
  },
  "prosthodontics": {
    "bank": {
      "extendId": "4028b88168ffeec00168ffeecc310013",
      "price": "680",
      "id": "d59ecd2d56f040688fb2ca5c1bfc4123",
      "status": true
    },
    "search": {
      "price": "",
      "id": "",
      "status": false
    },
    "disease": {
      "price": "600",
      "id": "ac54d49111704e098dbb4f9e7050f0ec",
      "status": true
    },
    "paper": {
      "extendId": "4028b88168ffeec00168ffeecc310013",
      "price": "880",
      "id": "5a6f45abbb524404b4974301240789c3",
      "status": true
    },
    "course": {
      "price": "",
      "id": "",
      "status": false
    },
    "video": {
      "price": "1380",
      "id": "aee49b257f184497803fd0b4c3e7faf3",
      "status": true
    }
  },
  "pediatric": {
    "bank": {
      "extendId": "4028b88168ffeec00168ffeecc320020",
      "price": "680",
      "id": "35fa64589d0942da82407d092f8b9a8f",
      "status": true
    },
    "search": {
      "price": "",
      "id": "",
      "status": false
    },
    "disease": {
      "price": "",
      "id": "",
      "status": false
    },
    "paper": {
      "extendId": "4028b88168ffeec00168ffeecc320020",
      "price": "880",
      "id": "86c9eba115d245b88d736d511605e6c4",
      "status": true
    },
    "course": {
      "price": "",
      "id": "",
      "status": false
    },
    "video": {
      "price": "1380",
      "id": "e1fff006bb334c3a87f4a328e567a13e",
      "status": true
    }
  },
  "anesthesia": {
    "bank": {
      "extendId": "4028b88168ffeec00168ffeecc2f0005",
      "price": "1280",
      "id": "90f25e0829644735ba768442527e0f69",
      "status": true
    },
    "search": {
      "price": "",
      "id": "",
      "status": false
    },
    "disease": {
      "price": "2200",
      "id": "d8d951919b2845f4a98139dce00c0f1c",
      "status": true
    },
    "paper": {
      "extendId": "4028b88168ffeec00168ffeecc2f0005",
      "price": "1480",
      "id": "e057624c5ac442f2b2f7ca6e5b0cb46a",
      "status": true
    },
    "course": {
      "price": "",
      "id": "",
      "status": false
    },
    "video": {
      "price": "2280",
      "id": "a7604bc3ed704a4491d4e6a90814ea06",
      "status": true
    }
  },
  "chinese": {
    "bank": {
      "extendId": "4028b88168ffeec00168ffeecc2f0004",
      "price": "1280",
      "id": "fe9e9cb60f4b4be893f54c2733818d8d",
      "status": true
    },
    "paper": {
      "extendId": "4028b88168ffeec00168ffeecc2f0004",
      "price": "2280",
      "id": "3efb41e621b14e8a9b11e52ddd1aa853",
      "status": true
    },
    "search": {
      "price": "",
      "id": "",
      "status": false
    },
    "disease": {
      "price": "",
      "id": "",
      "status": false
    },
    "course": {
      "price": "",
      "id": "",
      "status": false
    },
    "video": {
      "price": "",
      "id": "",
      "status": false
    }
  },
  "general": {
    "bank": {
      "extendId": "4028b88168ffeec00168ffeecc2f0001",
      "price": "1280",
      "id": "895ed2609e194eeda0cd76ec242f0f7c",
      "status": true
    },
    "search": {
      "price": "",
      "id": "",
      "status": false
    },
    "disease": {
      "price": "1200",
      "id": "8d3b90e54cc44dbc9630a997143a98a2",
      "status": true
    },
    "paper": {
      "extendId": "4028b88168ffeec00168ffeecc2f0001",
      "price": "1480",
      "id": "8081abd657794b8ca6f2276257d57e7c",
      "status": true
    },
    "course": {
      "price": "",
      "id": "",
      "status": false
    },
    "video": {
      "price": "1380",
      "id": "78ee482dd0464bcb8df64c64f37a2a7e",
      "status": true
    }
  },
  "rehabilitation": {
    "bank": {
      "extendId": "4028b88168ffeec00168ffeecc30000f",
      "price": "980",
      "id": "6cbda588202243aa961e3630910ef0cc",
      "status": true
    },
    "search": {
      "price": "",
      "id": "",
      "status": false
    },
    "disease": {
      "price": "",
      "id": "",
      "status": false
    },
    "paper": {
      "extendId": "4028b88168ffeec00168ffeecc30000f",
      "price": "1480",
      "id": "7c9131fb0e9f4eaba0c69997c550eef5",
      "status": true
    },
    "course": {
      "price": "",
      "id": "",
      "status": false
    },
    "video": {
      "price": "880",
      "id": "b364b5d88993430281e2d62d68bdedf4",
      "status": true
    }
  },
  "genetics": {
    "bank": {
      "extendId": "4028b88168ffeec00168ffeecc310017",
      "price": "1280",
      "id": "bd4f536584cd4284a28da172a046492f",
      "status": true
    },
    "search": {
      "price": "",
      "id": "",
      "status": false
    },
    "disease": {
      "price": "",
      "id": "",
      "status": false
    },
    "paper": {
      "extendId": "4028b88168ffeec00168ffeecc310017",
      "price": "880",
      "id": "9c434e0bd3c249478907657882ddd29b",
      "status": true
    },
    "course": {
      "price": "",
      "id": "",
      "status": false
    },
    "video": {
      "price": "880",
      "id": "51d7384d02be423e93587c285affe8bc",
      "status": true
    }
  },
  "ophthalmology": {
    "bank": {
      "extendId": "4028b88168ffeec00168ffeecc30000c",
      "price": "980",
      "id": "032d3a94cb994dce9aa737a97aaad001",
      "status": true
    },
    "search": {
      "price": "",
      "id": "",
      "status": false
    },
    "disease": {
      "price": "1000",
      "id": "cbaa14d6ef91400ab177a2f928d4be7b",
      "status": true
    },
    "paper": {
      "extendId": "4028b88168ffeec00168ffeecc30000c",
      "price": "1480",
      "id": "cf5b3f8885f74adc93878e49dd6822db",
      "status": true
    },
    "course": {
      "price": "",
      "id": "",
      "status": false
    },
    "video": {
      "price": "2980",
      "id": "b5375544e6ba46c29cc5800dc63d8330",
      "status": true
    }
  },
  "urinary": {
    "bank": {
      "extendId": "4028b88168ffeec00168ffeecc32001e",
      "price": "680",
      "id": "2edf6e03089b4682ac972aa413bb387c",
      "status": true
    },
    "search": {
      "price": "",
      "id": "",
      "status": false
    },
    "disease": {
      "price": "1200",
      "id": "cb8b654382ec4fa68974126a7471f077",
      "status": true
    },
    "paper": {
      "extendId": "4028b88168ffeec00168ffeecc32001e",
      "price": "880",
      "id": "14bd650d78724da19f1c296d158780f8",
      "status": true
    },
    "course": {
      "price": "",
      "id": "",
      "status": false
    },
    "video": {
      "price": "880",
      "id": "5fe8a38b61f54ec7812305b82a4f8cff",
      "status": true
    }
  },
  "oralinternal": {
    "bank": {
      "extendId": "4028b88168ffeec00168ffeecc30000e",
      "price": "980",
      "id": "92246807eca645dfb4d77b8162850a4c",
      "status": true
    },
    "search": {
      "price": "",
      "id": "",
      "status": false
    },
    "disease": {
      "price": "600",
      "id": "9950663215514d059e13a31ff2af168c",
      "status": true
    },
    "paper": {
      "extendId": "4028b88168ffeec00168ffeecc30000e",
      "price": "880",
      "id": "48c8dc553b9a44f1bff0b997bb4a3f65",
      "status": true
    },
    "course": {
      "price": "",
      "id": "",
      "status": false
    },
    "video": {
      "price": "1380",
      "id": "cba85dda21584cc78e15be7a2d5c3e7d",
      "status": true
    }
  },
  "nuclear": {
    "bank": {
      "extendId": "4028b88168ffeec00168ffeecc310011",
      "price": "1280",
      "id": "497a5e78255a4e01a0292f72375d9864",
      "status": true
    },
    "search": {
      "price": "",
      "id": "",
      "status": false
    },
    "disease": {
      "price": "",
      "id": "",
      "status": false
    },
    "paper": {
      "extendId": "4028b88168ffeec00168ffeecc310011",
      "price": "1480",
      "id": "34a2eeba232e483ba6b75fdd364a021f",
      "status": true
    },
    "course": {
      "price": "",
      "id": "",
      "status": false
    },
    "video": {
      "price": "880",
      "id": "04ce9f706f0448daaafa13142a719420",
      "status": true
    }
  },
  "cardiothoracic": {
    "bank": {
      "extendId": "4028b88168ffeec00168ffeecc32001f",
      "price": "680",
      "id": "4e8297d77b464d538a188427756618f9",
      "status": true
    },
    "search": {
      "price": "",
      "id": "",
      "status": false
    },
    "disease": {
      "price": "1200",
      "id": "3f7306e969924f229f60e1c94e04931c",
      "status": true
    },
    "paper": {
      "extendId": "4028b88168ffeec00168ffeecc32001f",
      "price": "880",
      "id": "8883e7ae36ce4a0fb0d5ea8974108b7b",
      "status": true
    },
    "course": {
      "price": "",
      "id": "",
      "status": false
    },
    "video": {
      "price": "880",
      "id": "d7ab051c1b694f3b91e6fa58601b8cd0",
      "status": true
    }
  },
  "neurology": {
    "bank": {
      "extendId": "4028b88168ffeec00168ffeecc2f0007",
      "price": "680",
      "id": "4271ee50a85c4011994a8e83b39bb0bf",
      "status": true
    },
    "search": {
      "price": "",
      "id": "",
      "status": false
    },
    "disease": {
      "price": "1200",
      "id": "c890173b0b1b483fab55aaf872eea879",
      "status": true
    },
    "paper": {
      "extendId": "4028b88168ffeec00168ffeecc2f0007",
      "price": "1480",
      "id": "a0036afd6181446cb36ff0d55363545f",
      "status": true
    },
    "course": {
      "price": "",
      "id": "",
      "status": false
    },
    "video": {
      "price": "1380",
      "id": "752bc557844a4264bac08c3b2079d58a",
      "status": true
    }
  },
  "prevention": {
    "bank": {
      "extendId": "4028b88168ffeec00168ffeecc32001c",
      "price": "1280",
      "id": "65351da35fd84c9d8786afda94dc333b",
      "status": true
    },
    "search": {
      "price": "",
      "id": "",
      "status": false
    },
    "disease": {
      "price": "",
      "id": "",
      "status": false
    },
    "paper": {
      "extendId": "4028b88168ffeec00168ffeecc32001c",
      "price": "880",
      "id": "9e31b0598d7146848e4f169c03bce2fc",
      "status": true
    },
    "course": {
      "price": "",
      "id": "",
      "status": false
    },
    "video": {
      "price": "880",
      "id": "7101cec4a0a44c279c08bf6ea7bffaf9",
      "status": true
    }
  },
  "genetic": {
    "bank": {
      "extendId": "4028b88168ffeec00168ffeecc32001b",
      "price": "1280",
      "id": "713889faa0684b618a278f5cc172c9c3",
      "status": true
    },
    "paper": {
      "extendId": "4028b88168ffeec00168ffeecc32001b",
      "price": "1480",
      "id": "3e668748c49340d284c71c8adb7df614",
      "status": true
    },
    "search": {
      "price": "",
      "id": "",
      "status": false
    },
    "disease": {
      "price": "",
      "id": "",
      "status": false
    },
    "course": {
      "price": "",
      "id": "",
      "status": false
    },
    "video": {
      "price": "880",
      "id": "f3d8975a6f274862b9da71cede287abc",
      "status": true,
    }
  },
  "maxillofacial": {
    "bank": {
      "extendId": "4028b88168ffeec00168ffeecc310012",
      "price": "680",
      "id": "54e2df090c494ea897b45acc7a1e4cec",
      "status": true
    },
    "search": {
      "price": "",
      "id": "",
      "status": false
    },
    "disease": {
      "price": "600",
      "id": "1204852bb8bb4f4d873da1159db6a30e",
      "status": true
    },
    "paper": {
      "extendId": "4028b88168ffeec00168ffeecc310012",
      "price": "880",
      "id": "0efd0045ed6943b985877936bd5496e2",
      "status": true
    },
    "course": {
      "price": "",
      "id": "",
      "status": false
    },
    "video": {
      "price": "1380",
      "id": "ac225d14afc0471db281adff09088428",
      "status": true
    }
  },
  "assistant": {
    "bank": {
      "extendId": "4028b88168ffeec00168ffeecc2f0009",
      "price": "1280",
      "id": "d0c141f6ecf64e0586876c6cfc426f12",
      "status": true
    },
    "search": {
      "price": "",
      "id": "",
      "status": false
    },
    "disease": {
      "price": "1200",
      "id": "9a4c9f567765415ab416ccf138159f54",
      "status": true
    },
    "paper": {
      "extendId": "4028b88168ffeec00168ffeecc2f0009",
      "price": "880",
      "id": "c31ad5c96b5549e48ff52600afd60a53",
      "status": true
    },
    "course": {
      "price": "",
      "id": "",
      "status": false
    },
    "video": {
      "price": "1380",
      "id": "bec2b7010a9042ccaf18988529db62c0",
      "status": true
    }
  },
  "imaging": {
    "bank": {
      "extendId": "4028b88168ffeec00168ffeecc2f0006",
      "price": "1280",
      "id": "1b629ef109b7449ab92f7a2fd980823a",
      "status": true
    },
    "search": {
      "price": "",
      "id": "",
      "status": false
    },
    "disease": {
      "price": "",
      "id": "",
      "status": false
    },
    "paper": {
      "extendId": "4028b88168ffeec00168ffeecc2f0006",
      "price": "1480",
      "id": "5f09389516654ad19f2c69c930a8e369",
      "status": true
    },
    "course": {
      "price": "",
      "id": "",
      "status": false
    },
    "video": {
      "price": "880",
      "id": "7cd1707054a7421ca3fd71c1e805e9d0",
      "status": true
    }
  },
  "ultrasound": {
    "bank": {
      "extendId": "4028b8816897ae62016897ae724f0011",
      "price": "1280",
      "id": "c802ee8dc78c43d9b0cb33a88514c3db",
      "status": true
    },
    "search": {
      "price": "",
      "id": "",
      "status": false
    },
    "disease": {
      "price": "",
      "id": "",
      "status": false
    },
    "paper": {
      "extendId": "4028b8816897ae62016897ae724f0011",
      "price": "1480",
      "id": "59f49b5fbf03407b89f94e940837b930",
      "status": true
    },
    "course": {
      "price": "",
      "id": "",
      "status": false
    },
    "video": {
      "price": "880",
      "id": "1f4101bfe0264d61a1a0549874a84b73",
      "status": true
    }
  },
  "plastic": {
    "bank": {
      "extendId": "4028b88168ffeec00168ffeecc320021",
      "price": "680",
      "id": "eaa6b05aa97e46e180fe0c96455ef196",
      "status": true
    },
    "search": {
      "price": "",
      "id": "",
      "status": false
    },
    "disease": {
      "price": "",
      "id": "",
      "status": false
    },
    "paper": {
      "extendId": "4028b88168ffeec00168ffeecc320021",
      "price": "880",
      "id": "78cf84d17ab340b5b980cda9b7ff5334",
      "status": true
    },
    "course": {
      "price": "",
      "id": "",
      "status": false
    },
    "video": {
      "price": "880",
      "id": "bf5c3c1f740c4fee952561879c36c904",
      "status": true
    }
  },
  "dermatology": {
    "bank": {
      "extendId": "4028b88168ffeec00168ffeecc310018",
      "price": "980",
      "id": "cabd6ae80e1947a5a0f4c7f6aface96e",
      "status": true
    },
    "search": {
      "price": "",
      "id": "",
      "status": false
    },
    "disease": {
      "price": "",
      "id": "",
      "status": false
    },
    "paper": {
      "extendId": "4028b88168ffeec00168ffeecc310018",
      "price": "1480",
      "id": "14edcf65d6e641cfaa1213e93e30f308",
      "status": true
    },
    "course": {
      "price": "",
      "id": "",
      "status": false
    },
    "video": {
      "price": "880",
      "id": "c9408397487e4d0ab584829b7cb47e5b",
      "status": true
    }
  },
  "pediatrics": {
    "bank": {
      "extendId": "4028b88168ffeec00168ffeecc2f0002",
      "price": "1280",
      "id": "f1ba1ef240a74d5ba9432a36340bf3db",
      "status": true
    },
    "search": {
      "price": "",
      "id": "",
      "status": false
    },
    "disease": {
      "price": "2400",
      "id": "b0d77f3caa0d4197b6c785710762981b",
      "status": true
    },
    "paper": {
      "extendId": "4028b88168ffeec00168ffeecc2f0002",
      "price": "2280",
      "id": "0fb0de2828e5435ca0547beced5fa3b6",
      "status": true
    },
    "course": {
      "price": "",
      "id": "",
      "status": false
    },
    "video": {
      "price": "880",
      "id": "a914f9fd715b4ea8928c1c3ec55db4dd",
      "status": true
    }
  },
  "radiotherapy": {
    "bank": {
      "extendId": "4028b88168ffeec00168ffeecc32001d",
      "price": "980",
      "id": "d916e97c7a584678b8880d8408273bb0",
      "status": false
    },
    "search": {
      "price": "",
      "id": "",
      "status": false
    },
    "disease": {
      "price": "",
      "id": "",
      "status": false
    },
    "paper": {
      "extendId": "4028b88168ffeec00168ffeecc32001d",
      "price": "1480",
      "id": "9e10db8239ef4d98a4186441e4ea4107",
      "status": false
    },
    "course": {
      "price": "",
      "id": "",
      "status": false
    },
    "video": {
      "price": "880",
      "id": "6295f486d99143c3a90ac2beec99a6ba",
      "status": true
    }
  },
  "oral": {
    "bank": {
      "extendId": "4028b88168ffeec00168ffeecc30000b",
      "price": "680",
      "id": "26a9b626571f4ac6b57a4889afe0ef7c",
      "status": true
    },
    "search": {
      "price": "",
      "id": "",
      "status": false
    },
    "disease": {
      "price": "600",
      "id": "49057c83073b42048bcc384e1bed4085",
      "status": true
    },
    "paper": {
      "extendId": "4028b88168ffeec00168ffeecc30000b",
      "price": "880",
      "id": "944ab38242d648128cf63e41023a0292",
      "status": true
    },
    "course": {
      "price": "",
      "id": "",
      "status": false
    },
    "video": {
      "price": "1380",
      "id": "851bb14c639f4d73b4ffeabf59f067a0",
      "status": true
    }
  },
  "nuclearmedicine": {
    "bank": {
      "extendId": "4028b88168ffeec00168ffeecc320022",
      "price": "680",
      "id": "e96891fa22cd4b6d8fb146f93b0ab6a1",
      "status": true
    },
    "search": {
      "price": "",
      "id": "",
      "status": false
    },
    "disease": {
      "price": "",
      "id": "",
      "status": false
    },
    "paper": {
      "extendId": "4028b88168ffeec00168ffeecc320022",
      "price": "880",
      "id": "e73b11e6130747e4a1e000838da414d3",
      "status": true
    },
    "course": {
      "price": "",
      "id": "",
      "status": false
    },
    "video": {
      "price": "880",
      "id": "eacdbebee35c457786383c34ed5cb984",
      "status": true
    }
  },
  "neurosurgery": {
    "bank": {
      "extendId": "4028b88168ffeec00168ffeecc310019",
      "price": "680",
      "id": "a50be7ee32e74edca1085e2d5485bec7",
      "status": true
    },
    "search": {
      "price": "",
      "id": "",
      "status": false
    },
    "disease": {
      "price": "",
      "id": "",
      "status": false
    },
    "paper": {
      "extendId": "4028b88168ffeec00168ffeecc310019",
      "price": "880",
      "id": "d2021b4a28f145688040c3d0e9ba8eda",
      "status": true
    },
    "course": {
      "price": "",
      "id": "",
      "status": false
    },
    "video": {
      "price": "880",
      "id": "82df728cf52144609a0ec7461094d6c3",
      "status": true
    }
  },
  "otorhinolaryngology": {
    "bank": {
      "extendId": "4028b88168ffeec00168ffeecc30000d",
      "price": "680",
      "id": "753abe229ae5441facc9cdd91d566271",
      "status": true
    },
    "search": {
      "price": "",
      "id": "",
      "status": false
    },
    "disease": {
      "price": "",
      "id": "",
      "status": false
    },
    "paper": {
      "extendId": "4028b88168ffeec00168ffeecc30000d",
      "price": "1480",
      "id": "f2a1e6fc74d645f08e1e6951cc2c646d",
      "status": true
    },
    "course": {
      "price": "",
      "id": "",
      "status": false
    },
    "video": {
      "price": "2980",
      "id": "6543b32aafcf492d8862e7418ae1daca",
      "status": true
    }
  },
  "surgery": {
    "bank": {
      "extendId": "4028b88168ffeec00168ffeecc270000",
      "price": "1280",
      "id": "a8c92e1d883441b39276f54ab51a56f6",
      "status": true
    },
    "search": {
      "price": "",
      "id": "",
      "status": false
    },
    "disease": {
      "price": "",
      "id": "",
      "status": false
    },
    "paper": {
      "extendId": "4028b88168ffeec00168ffeecc270000",
      "price": "2280",
      "id": "98a6ef388bb44c19aadf5c1ee44ec82e",
      "status": true
    },
    "course": {
      "price": "",
      "id": "",
      "status": false
    },
    "video": {
      "price": "2280",
      "id": "8d7e40a10d924e838d3dee1049e24eeb",
      "status": true
    }
  }
};

const initialState: Subject = subjects['internal'];

export function subjectReducer(state: Subject = initialState, action: SubjectAction): Subject {
  switch (action.type) {
    case 'subject':
      console.log(action.payload);
      return subjects[action.payload];
    default:
      return state;
  }
}

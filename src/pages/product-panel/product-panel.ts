import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {rstExamUrl} from "../../app/global";
import {AppVersion} from "../../components/AppVersion";
import {Observable} from "rxjs/Observable";
import {select, Store} from "@ngrx/store";
import {WebCallAppProvider} from "../../providers/web-call-app/web-call-app";
import {HttpServiceProvider} from "../../providers/http-service/http-service";

/**
 * Generated class for the ProductPanelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'product-panel',
})
@Component({
  selector: 'page-product-panel',
  templateUrl: 'product-panel.html',
})
export class ProductPanelPage {

  subject = [
    {
      "contents": [
        [
          {
            "originalPrice": "3000",
            "price": "3000",
            "id": "ea9e206e1c714cdea59adeebc985b52d",
            "status": false
          },
          {
            "extendId": "4028b88168ffeec00168ffeecc2f0003",
            "originalPrice": "2280",
            "price": "2280",
            "id": "1865211a14cb4951b8d369cfed822a3d",
            "status": true
          },
          {
            "extendId": "4028b88168ffeec00168ffeecc2f0003",
            "originalPrice": "1280",
            "price": "1280",
            "id": "dc4270996b5a4f6db0730616d572ab67",
            "status": true
          },
          {
            "originalPrice": "2880",
            "price": "2880",
            "id": "33c03ea709a84a2b9bd55673664dc55e",
            "status": false
          },
          {
            "originalPrice": "1000",
            "price": "1000",
            "id": "58b6391f266e496aac8f876d1b4ce85f",
            "status": false
          }
        ],
        [
          {
            "originalPrice": "",
            "price": "",
            "id": "38324fee438f4399b76cc014c9093a43",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "bc469bff74ac451e8c4562c39699e25d",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "f13e9a33a782490d8108e01516e4e92d",
            "status": false
          }
        ]
      ],
      "name": "内科",
      "status": true
    },
    {
      "contents": [
        [
          {
            "originalPrice": "3000",
            "price": "3000",
            "id": "1e24a98597584a199a79a27602ca6e7b",
            "status": false
          },
          {
            "extendId": "4028b88168ffeec00168ffeecc270000",
            "originalPrice": "2280",
            "price": "2280",
            "id": "98a6ef388bb44c19aadf5c1ee44ec82e",
            "status": true
          },
          {
            "extendId": "4028b88168ffeec00168ffeecc270000",
            "originalPrice": "1280",
            "price": "1280",
            "id": "a8c92e1d883441b39276f54ab51a56f6",
            "status": true
          },
          {
            "originalPrice": "1880",
            "price": "1880",
            "id": "7f5ec5210a87429bb4db28b495422c71",
            "status": false
          },
          {
            "originalPrice": "1000",
            "price": "1000",
            "id": "b76636fe7ca34ad898c76c4b6b871e66",
            "status": false
          }
        ],
        [
          {
            "originalPrice": "",
            "price": "",
            "id": "89d3003b45fa43aba34a8125b3e07260",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "113690cb044f43dc8e1bb0b1276ccd67",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "b1990b4852094c27b4145e53a667ef70",
            "status": false
          }
        ]
      ],
      "name": "外科",
      "status": true
    },
    {
      "contents": [
        [
          {
            "originalPrice": "3000",
            "price": "3000",
            "id": "c95134596cc2420db5f410cf2a5e53e0",
            "status": false
          },
          {
            "extendId": "4028b88168ffeec00168ffeecc2f0004",
            "originalPrice": "2280",
            "price": "2280",
            "id": "3efb41e621b14e8a9b11e52ddd1aa853",
            "status": true
          },
          {
            "extendId": "4028b88168ffeec00168ffeecc2f0004",
            "originalPrice": "1280",
            "price": "1280",
            "id": "fe9e9cb60f4b4be893f54c2733818d8d",
            "status": true
          },
          {
            "originalPrice": "0",
            "price": "0",
            "id": "0627038bd03e4f26953a1dd86fda9379",
            "status": false
          },
          {
            "originalPrice": "1000",
            "price": "1000",
            "id": "ed01a5f045a4462195c072965fab799f",
            "status": false
          }
        ],
        [
          {
            "originalPrice": "",
            "price": "",
            "id": "9323a84afd334ed3b061ca1a31a64a00",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "3216fb2c8dc048b3b1a09b6ea3542298",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "a0a85d98928d46bf88eb42a61ce9b841",
            "status": false
          }
        ]
      ],
      "name": "中医科",
      "status": true
    },
    {
      "contents": [
        [
          {
            "originalPrice": "3000",
            "price": "3000",
            "id": "2c9ee0f0f195455693efed2228ad0da5",
            "status": false
          },
          {
            "extendId": "4028b88168ffeec00168ffeecc280000",
            "originalPrice": "2280",
            "price": "2280",
            "id": "bca46856a3bf45a89c1fadb4aebb628f",
            "status": true
          },
          {
            "extendId": "4028b88168ffeec00168ffeecc280000",
            "originalPrice": "1280",
            "price": "1280",
            "id": "dc77f7f20edb4753816ddd6fb6aeaf7a",
            "status": true
          },
          {
            "originalPrice": "1880",
            "price": "1880",
            "id": "209718e87407437fa6a54d239d5328be",
            "status": false
          },
          {
            "originalPrice": "1000",
            "price": "1000",
            "id": "d2230d9165b249c7863978a174730ab5",
            "status": false
          }
        ],
        [
          {
            "originalPrice": "",
            "price": "",
            "id": "41bb12d603354dbd831d4657b495e10c",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "736b6381443646e8b135a2061ee2c8e9",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "7e9009f6ee21435eb0166b5cade03342",
            "status": false
          }
        ]
      ],
      "name": "妇产科",
      "status": true
    },
    {
      "contents": [
        [
          {
            "originalPrice": "3000",
            "price": "3000",
            "id": "b21e1f7a504d4f878424f2bc2e995a02",
            "status": false
          },
          {
            "extendId": "4028b88168ffeec00168ffeecc2f0002",
            "originalPrice": "2280",
            "price": "2280",
            "id": "0fb0de2828e5435ca0547beced5fa3b6",
            "status": true
          },
          {
            "extendId": "4028b88168ffeec00168ffeecc2f0002",
            "originalPrice": "1280",
            "price": "1280",
            "id": "f1ba1ef240a74d5ba9432a36340bf3db",
            "status": true
          },
          {
            "originalPrice": "580",
            "price": "580",
            "id": "89d1a25d799440f98193739d800ca02c",
            "status": false
          },
          {
            "originalPrice": "1000",
            "price": "1000",
            "id": "ce289e063e314e78a4f36793d3bfd086",
            "status": false
          }
        ],
        [
          {
            "originalPrice": "",
            "price": "",
            "id": "01d90d65c81b425095941454bf6eaaa3",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "658149c6a9034e4d9ccb1456d05bb4da",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "afe40b29e9f34fb3ae426dcf7d721757",
            "status": false
          }
        ]
      ],
      "name": "儿科",
      "status": true
    },
    {
      "contents": [
        [
          {
            "originalPrice": "3000",
            "price": "3000",
            "id": "b8564b8cfac24a91a36ed525c1f8c6a7",
            "status": false
          },
          {
            "extendId": "4028b88168ffeec00168ffeecc2f0001",
            "originalPrice": "1480",
            "price": "1480",
            "id": "8081abd657794b8ca6f2276257d57e7c",
            "status": true
          },
          {
            "extendId": "4028b88168ffeec00168ffeecc2f0001",
            "originalPrice": "1280",
            "price": "1280",
            "id": "895ed2609e194eeda0cd76ec242f0f7c",
            "status": true
          },
          {
            "originalPrice": "1080",
            "price": "1080",
            "id": "685e5ad0b3ea4bdebf1bc6b299b40770",
            "status": false
          },
          {
            "originalPrice": "1000",
            "price": "1000",
            "id": "ba668f4167a34229a1ed732217ceec6b",
            "status": false
          }
        ],
        [
          {
            "originalPrice": "",
            "price": "",
            "id": "06da78c277164b61afc366dc11f7b6da",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "4376b3b9dea44f08bdd3f30c5bb8951d",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "1a77088127c54487945f285f5f433e82",
            "status": false
          }
        ]
      ],
      "name": "全科",
      "status": true
    },
    {
      "contents": [
        [
          {
            "originalPrice": "3000",
            "price": "3000",
            "id": "ac995e54732c4d1a981d00a33d0aa2a5",
            "status": false
          },
          {
            "extendId": "4028b88168ffeec00168ffeecc2f0009",
            "originalPrice": "880",
            "price": "880",
            "id": "c31ad5c96b5549e48ff52600afd60a53",
            "status": true
          },
          {
            "extendId": "4028b88168ffeec00168ffeecc2f0009",
            "originalPrice": "1280",
            "price": "1280",
            "id": "d0c141f6ecf64e0586876c6cfc426f12",
            "status": true
          },
          {
            "originalPrice": "1080",
            "price": "1080",
            "id": "9b7cc3aac0af41d0a4ea647fc4c1b100",
            "status": false
          },
          {
            "originalPrice": "1000",
            "price": "1000",
            "id": "c1b2d4a79a1e48a0a77ec7acfd15dcef",
            "status": false
          }
        ],
        [
          {
            "originalPrice": "",
            "price": "",
            "id": "993365cf40434d108d373807ab6c22e1",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "99b457c9a28c46a68d2fd60e43bc9d2e",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "d4f9684b2aa44c86a533bb6d3d8c5718",
            "status": false
          }
        ]
      ],
      "name": "助理全科",
      "status": false
    },
    {
      "contents": [
        [
          {
            "originalPrice": "3000",
            "price": "3000",
            "id": "8f1f8a076f76440894122230d0c8326e",
            "status": false
          },
          {
            "extendId": "4028b88168ffeec00168ffeecc2f0006",
            "originalPrice": "1480",
            "price": "1480",
            "id": "5f09389516654ad19f2c69c930a8e369",
            "status": true
          },
          {
            "extendId": "4028b88168ffeec00168ffeecc2f0006",
            "originalPrice": "1280",
            "price": "1280",
            "id": "1b629ef109b7449ab92f7a2fd980823a",
            "status": true
          },
          {
            "originalPrice": "580",
            "price": "580",
            "id": "58a50832e0594c0e9818be7f0ce4d4c0",
            "status": false
          },
          {
            "originalPrice": "1000",
            "price": "1000",
            "id": "818bf5fc6ce7496da19747a9bcf28dc0",
            "status": false
          }
        ],
        [
          {
            "originalPrice": "",
            "price": "",
            "id": "7b33bdd5dfb743a29ffc420b1026c238",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "b5bfd6ee3bce4390954ca393f5d8e695",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "23948e149d384dde96a5e6ed88becbe6",
            "status": false
          }
        ]
      ],
      "name": "放射科",
      "status": false
    },
    {
      "contents": [
        [
          {
            "originalPrice": "3000",
            "price": "3000",
            "id": "42becc10763b48109743d4b234f9ab46",
            "status": false
          },
          {
            "extendId": "4028b88168ffeec00168ffeecc2f0005",
            "originalPrice": "1480",
            "price": "1480",
            "id": "e057624c5ac442f2b2f7ca6e5b0cb46a",
            "status": true
          },
          {
            "extendId": "4028b88168ffeec00168ffeecc2f0005",
            "originalPrice": "1280",
            "price": "1280",
            "id": "90f25e0829644735ba768442527e0f69",
            "status": true
          },
          {
            "originalPrice": "1880",
            "price": "1880",
            "id": "40258bd96bd744888a1df9f918f2a928",
            "status": false
          },
          {
            "originalPrice": "1000",
            "price": "1000",
            "id": "b39ee641b66d49adbd509d5e3cff14f1",
            "status": false
          }
        ],
        [
          {
            "originalPrice": "",
            "price": "",
            "id": "df14cc949d2e411fa8a4145a5e354694",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "99f317be1b714f63bb9d7f57d9f0fcba",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "d7f47348f37e429bb971d3bbb1d26ac2",
            "status": false
          }
        ]
      ],
      "name": "麻醉科",
      "status": true
    },
    {
      "contents": [
        [
          {
            "originalPrice": "3000",
            "price": "3000",
            "id": "4ca1775a857b4fbcbf8c00e39d03e8e0",
            "status": false
          },
          {
            "extendId": "4028b8816897ae62016897ae724f0011",
            "originalPrice": "1480",
            "price": "1480",
            "id": "59f49b5fbf03407b89f94e940837b930",
            "status": true
          },
          {
            "extendId": "4028b8816897ae62016897ae724f0011",
            "originalPrice": "1280",
            "price": "1280",
            "id": "c802ee8dc78c43d9b0cb33a88514c3db",
            "status": true
          },
          {
            "originalPrice": "580",
            "price": "580",
            "id": "ce587c5e38724cbf924e9b5e26968fb9",
            "status": false
          },
          {
            "originalPrice": "1000",
            "price": "1000",
            "id": "d99e48ab1f594e8189b359cf5d2a6c00",
            "status": false
          }
        ],
        [
          {
            "originalPrice": "",
            "price": "",
            "id": "a639806ac83540788a80a6ef89d1ab80",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "aa5f8c4ab0c44112972ecf8005b6c80b",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "0720a64e36d443e18603ae5602f86b5b",
            "status": false
          }
        ]
      ],
      "name": "超声医学科",
      "status": true
    },
    {
      "contents": [
        [
          {
            "originalPrice": "3000",
            "price": "3000",
            "id": "4a5e4707461040879216d64248810224",
            "status": false
          },
          {
            "extendId": "4028b88168ffeec00168ffeecc2f0007",
            "originalPrice": "1480",
            "price": "1480",
            "id": "a0036afd6181446cb36ff0d55363545f",
            "status": true
          },
          {
            "extendId": "4028b88168ffeec00168ffeecc2f0007",
            "originalPrice": "680",
            "price": "680",
            "id": "4271ee50a85c4011994a8e83b39bb0bf",
            "status": true
          },
          {
            "originalPrice": "1080",
            "price": "1080",
            "id": "313d165886f746e08b007f67f5320edd",
            "status": false
          },
          {
            "originalPrice": "1000",
            "price": "1000",
            "id": "b2526d30a0c54afb9cae5e8025dd6cc8",
            "status": false
          }
        ],
        [
          {
            "originalPrice": "",
            "price": "",
            "id": "0212fe6b296d475bb1d080dab4d0d40a",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "9cae75bea875402293dad8c4ee16fbac",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "018824636f944080a93aef73bcfbdf4a",
            "status": false
          }
        ]
      ],
      "name": "神经内科",
      "status": true
    },
    {
      "contents": [
        [
          {
            "originalPrice": "3000",
            "price": "3000",
            "id": "93dda2877dc54e0e9950f79b46c42e7f",
            "status": false
          },
          {
            "extendId": "4028b8816897ae62016897ae724d0009",
            "originalPrice": "1480",
            "price": "1480",
            "id": "8613bd66f09f485581235b3bb66759ff",
            "status": true
          },
          {
            "extendId": "4028b8816897ae62016897ae724d0009",
            "originalPrice": "1280",
            "price": "1280",
            "id": "174cda0482604b418647a15d1eeec737",
            "status": true
          },
          {
            "originalPrice": "1080",
            "price": "1080",
            "id": "98942aab91e94dbe831a00d7b8fd6e95",
            "status": false
          },
          {
            "originalPrice": "1000",
            "price": "1000",
            "id": "2beb40017c4c4e1eb5db8a4ecc6776f7",
            "status": false
          }
        ],
        [
          {
            "originalPrice": "",
            "price": "",
            "id": "76c30c41b8924d6ca90ed57da66c64e7",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "68cc875ff0e5461ab6229ea4d3d661e1",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "5cf042ee3743426988ccc014bcd93b68",
            "status": false
          }
        ]
      ],
      "name": "急诊科",
      "status": true
    },
    {
      "contents": [
        [
          {
            "originalPrice": "0",
            "price": "0",
            "id": "ad0290606aa14dc5b12a79cb817e05c7",
            "status": false
          },
          {
            "extendId": "4028b88168ffeec00168ffeecc310010",
            "originalPrice": "1480",
            "price": "1480",
            "id": "f9f5c24f1dc0438ea3142cafa81aa3c2",
            "status": true
          },
          {
            "extendId": "4028b88168ffeec00168ffeecc310010",
            "originalPrice": "980",
            "price": "980",
            "id": "862e5f79e5294051bc8552572712b5d9",
            "status": true
          },
          {
            "originalPrice": "1080",
            "price": "1080",
            "id": "39e0b165919b4e1f899ac9091cea3daf",
            "status": false
          },
          {
            "originalPrice": "1000",
            "price": "1000",
            "id": "c3b1f3c057914fc09a8b172a61861eb5",
            "status": false
          }
        ],
        [
          {
            "originalPrice": "",
            "price": "",
            "id": "a3d637965fc04382aaec868cde6cbda9",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "0db5fa4ba9ba42d9b5e84fb7774f1a21",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "a9f960c05f544b7da9f7c928937dc94e",
            "status": false
          }
        ]
      ],
      "name": "骨科",
      "status": false
    },
    {
      "contents": [
        [
          {
            "originalPrice": "0",
            "price": "0",
            "id": "e7caa325f95149ff8701b337f9922bc8",
            "status": false
          },
          {
            "extendId": "4028b88168ffeec00168ffeecc32001d",
            "originalPrice": "1480",
            "price": "1480",
            "id": "9e10db8239ef4d98a4186441e4ea4107",
            "status": true
          },
          {
            "extendId": "4028b88168ffeec00168ffeecc32001d",
            "originalPrice": "980",
            "price": "980",
            "id": "d916e97c7a584678b8880d8408273bb0",
            "status": true
          },
          {
            "originalPrice": "580",
            "price": "580",
            "id": "4e6055a2a45f499bba8dc94b3b1c720b",
            "status": false
          },
          {
            "originalPrice": "1000",
            "price": "1000",
            "id": "d2782496c6044528a09e20e71a5d73c3",
            "status": false
          }
        ],
        [
          {
            "originalPrice": "",
            "price": "",
            "id": "17926ecbd2da4f159161901e3fee7523",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "0d2d64c7083140ce9823e228c3260b1c",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "e772d4a8b0e0497db6a0808fe0f53a66",
            "status": false
          }
        ]
      ],
      "name": "放射肿瘤科",
      "status": false
    },
    {
      "contents": [
        [
          {
            "originalPrice": "0",
            "price": "0",
            "id": "1357d7b746b24923bae064226c4a9b0a",
            "status": false
          },
          {
            "extendId": "4028b88168ffeec00168ffeecc30000f",
            "originalPrice": "1480",
            "price": "1480",
            "id": "7c9131fb0e9f4eaba0c69997c550eef5",
            "status": true
          },
          {
            "extendId": "4028b88168ffeec00168ffeecc30000f",
            "originalPrice": "980",
            "price": "980",
            "id": "6cbda588202243aa961e3630910ef0cc",
            "status": true
          },
          {
            "originalPrice": "580",
            "price": "580",
            "id": "811371b6809048db8ecd06a144afe5b8",
            "status": false
          },
          {
            "originalPrice": "1000",
            "price": "1000",
            "id": "1ec9b9c28bd848e291b1d91a37de9b8e",
            "status": false
          }
        ],
        [
          {
            "originalPrice": "",
            "price": "",
            "id": "aebb07e383674917aa760a1fb959472d",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "c2cf54b2ca1845529643810db418652c",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "4c397562614e477facc569c76593c3e5",
            "status": false
          }
        ]
      ],
      "name": "康复医学",
      "status": false
    },
    {
      "contents": [
        [
          {
            "originalPrice": "0",
            "price": "0",
            "id": "909003150064435ba8a07ee8e6908d14",
            "status": false
          },
          {
            "extendId": "4028b88168ffeec00168ffeecc32001a",
            "originalPrice": "1480",
            "price": "1480",
            "id": "ff4490cd20b74c22b9444ba061c8e4a1",
            "status": true
          },
          {
            "extendId": "4028b88168ffeec00168ffeecc32001a",
            "originalPrice": "680",
            "price": "680",
            "id": "578206a992bc4ba0938a241d711722c4",
            "status": true
          },
          {
            "originalPrice": "580",
            "price": "580",
            "id": "5c02d15993fa4cab8dc4df00c949a115",
            "status": false
          },
          {
            "originalPrice": "1000",
            "price": "1000",
            "id": "c3ff8dc287ad41389516e29a5ef53320",
            "status": false
          }
        ],
        [
          {
            "originalPrice": "",
            "price": "",
            "id": "87c93f308298408c9d0c0049d3b516dd",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "5cd655aba1a24b30ab394812837608c6",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "009c58e2ad6a4c1cb323ff4d76570a1d",
            "status": false
          }
        ]
      ],
      "name": "精神科",
      "status": false
    },
    {
      "contents": [
        [
          {
            "originalPrice": "3000",
            "price": "3000",
            "id": "50060d140ace4e939bfaf5002af99c28",
            "status": false
          },
          {
            "extendId": "4028b88168ffeec00168ffeecc30000c",
            "originalPrice": "1480",
            "price": "1480",
            "id": "cf5b3f8885f74adc93878e49dd6822db",
            "status": true
          },
          {
            "extendId": "4028b88168ffeec00168ffeecc30000c",
            "originalPrice": "980",
            "price": "980",
            "id": "032d3a94cb994dce9aa737a97aaad001",
            "status": true
          },
          {
            "originalPrice": "2880",
            "price": "2880",
            "id": "59204f99a9a34a279e34eefec9f432ad",
            "status": false
          },
          {
            "originalPrice": "1000",
            "price": "1000",
            "id": "a47a116f9ddc440f8adca5be87389fc1",
            "status": false
          }
        ],
        [
          {
            "originalPrice": "",
            "price": "",
            "id": "f35056c43109438b83300e6071ea21a2",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "740bd366d7fb4806af303e9345db4441",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "59936acc0e5a4f56a690567890f0a3bd",
            "status": false
          }
        ]
      ],
      "name": "眼科",
      "status": false
    },
    {
      "contents": [
        [
          {
            "originalPrice": "3000",
            "price": "3000",
            "id": "0ab3c4a118064f8c9ea8baf25731c04e",
            "status": false
          },
          {
            "extendId": "4028b88168ffeec00168ffeecc30000d",
            "originalPrice": "1480",
            "price": "1480",
            "id": "f2a1e6fc74d645f08e1e6951cc2c646d",
            "status": true
          },
          {
            "extendId": "4028b88168ffeec00168ffeecc30000d",
            "originalPrice": "680",
            "price": "680",
            "id": "753abe229ae5441facc9cdd91d566271",
            "status": true
          },
          {
            "originalPrice": "2880",
            "price": "2880",
            "id": "e1505f0fe63349549fd5243dcf5156fa",
            "status": false
          },
          {
            "originalPrice": "1000",
            "price": "1000",
            "id": "b42ca768e63c4178b3763d675295a02d",
            "status": false
          }
        ],
        [
          {
            "originalPrice": "",
            "price": "",
            "id": "49a4a410980a42c4b277dfa8fb75b2d5",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "397d3174bfcf48e8be0d708a45ad2b6e",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "4febae04bfac4cb091d99ca5d57fa8dc",
            "status": false
          }
        ]
      ],
      "name": "耳鼻咽喉科",
      "status": true
    },
    {
      "contents": [
        [
          {
            "originalPrice": "0",
            "price": "0",
            "id": "e311a9b0541945ca845a7271969f8fb4",
            "status": false
          },
          {
            "extendId": "4028b88168ffeec00168ffeecc310018",
            "originalPrice": "1480",
            "price": "1480",
            "id": "14edcf65d6e641cfaa1213e93e30f308",
            "status": true
          },
          {
            "extendId": "4028b88168ffeec00168ffeecc310018",
            "originalPrice": "980",
            "price": "980",
            "id": "cabd6ae80e1947a5a0f4c7f6aface96e",
            "status": true
          },
          {
            "originalPrice": "580",
            "price": "580",
            "id": "47c7f9ef001a40de89e9cbd3015bbfca",
            "status": false
          },
          {
            "originalPrice": "1000",
            "price": "1000",
            "id": "e636634355ab4fe6bb0900ba07d2aed8",
            "status": false
          }
        ],
        [
          {
            "originalPrice": "",
            "price": "",
            "id": "8a79f53fe31a49618cf0492d46544780",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "4449b48c9497455db75043b176c0b69f",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "731b265f25b44e37be894a94596fe811",
            "status": false
          }
        ]
      ],
      "name": "皮肤科",
      "status": false
    },
    {
      "contents": [
        [
          {
            "originalPrice": "0",
            "price": "0",
            "id": "8b711df2dc104643b65bc5043237ecf1",
            "status": false
          },
          {
            "extendId": "4028b88168ffeec00168ffeecc310019",
            "originalPrice": "880",
            "price": "880",
            "id": "d2021b4a28f145688040c3d0e9ba8eda",
            "status": true
          },
          {
            "extendId": "4028b88168ffeec00168ffeecc310019",
            "originalPrice": "680",
            "price": "680",
            "id": "a50be7ee32e74edca1085e2d5485bec7",
            "status": true
          },
          {
            "originalPrice": "580",
            "price": "580",
            "id": "8d84d4f46a244e4f89ba16aa91c19165",
            "status": false
          },
          {
            "originalPrice": "1000",
            "price": "1000",
            "id": "3356d841f03f46c086012397ca2a9f5b",
            "status": false
          }
        ],
        [
          {
            "originalPrice": "",
            "price": "",
            "id": "23d115ff32af43d2b30ab11c671c0a6c",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "b50806fae1974a4292b76585049e40a3",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "1ff83f7174784813adc562d410b38667",
            "status": false
          }
        ]
      ],
      "name": "神经外科",
      "status": true
    },
    {
      "contents": [
        [
          {
            "originalPrice": "0",
            "price": "0",
            "id": "39c4118c27f743e69f380dafaf4112b7",
            "status": false
          },
          {
            "extendId": "4028b88168ffeec00168ffeecc32001f",
            "originalPrice": "880",
            "price": "880",
            "id": "8883e7ae36ce4a0fb0d5ea8974108b7b",
            "status": true
          },
          {
            "extendId": "4028b88168ffeec00168ffeecc32001f",
            "originalPrice": "680",
            "price": "680",
            "id": "4e8297d77b464d538a188427756618f9",
            "status": true
          },
          {
            "originalPrice": "580",
            "price": "580",
            "id": "2bda1e7ee31743adbcb9233f96ceb279",
            "status": false
          },
          {
            "originalPrice": "1000",
            "price": "1000",
            "id": "a3a294c08fdf48a999bf33ab37f1af88",
            "status": false
          }
        ],
        [
          {
            "originalPrice": "",
            "price": "",
            "id": "a5f9feec5b5f4eb18d3643f216c89ee6",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "ab8d8b581f7d47e8bb277072801044aa",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "26a78d1c5e184403a9861f88b91f2cb0",
            "status": false
          }
        ]
      ],
      "name": "胸心外科",
      "status": false
    },
    {
      "contents": [
        [
          {
            "originalPrice": "0",
            "price": "0",
            "id": "b590222a6ccd4e258c9476227713f4ed",
            "status": false
          },
          {
            "extendId": "4028b88168ffeec00168ffeecc32001e",
            "originalPrice": "880",
            "price": "880",
            "id": "14bd650d78724da19f1c296d158780f8",
            "status": true
          },
          {
            "extendId": "4028b88168ffeec00168ffeecc32001e",
            "originalPrice": "680",
            "price": "680",
            "id": "2edf6e03089b4682ac972aa413bb387c",
            "status": true
          },
          {
            "originalPrice": "580",
            "price": "580",
            "id": "0debb4b22b1d4b7788adb0aeff9062a7",
            "status": false
          },
          {
            "originalPrice": "1000",
            "price": "1000",
            "id": "77c9bfae176e44a2a7f5c09c327dae2b",
            "status": false
          }
        ],
        [
          {
            "originalPrice": "",
            "price": "",
            "id": "723b4c757eaf419e9ce19073e1643ff0",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "99d8249e96e1458595d018fcb72f2f1a",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "cef6160e25fe4e349a6d9cb8a8e5fd5b",
            "status": false
          }
        ]
      ],
      "name": "泌尿外科",
      "status": true
    },
    {
      "contents": [
        [
          {
            "originalPrice": "0",
            "price": "0",
            "id": "60e7a87f572e48a5a1685a8308bf8234",
            "status": false
          },
          {
            "extendId": "4028b88168ffeec00168ffeecc320021",
            "originalPrice": "880",
            "price": "880",
            "id": "78cf84d17ab340b5b980cda9b7ff5334",
            "status": true
          },
          {
            "extendId": "4028b88168ffeec00168ffeecc320021",
            "originalPrice": "680",
            "price": "680",
            "id": "eaa6b05aa97e46e180fe0c96455ef196",
            "status": true
          },
          {
            "originalPrice": "580",
            "price": "580",
            "id": "9acf3024f7c44fd7bd8eca235a8dc8a5",
            "status": false
          },
          {
            "originalPrice": "1000",
            "price": "1000",
            "id": "e09099adf6d84d05b8442b7da9873433",
            "status": false
          }
        ],
        [
          {
            "originalPrice": "",
            "price": "",
            "id": "a48077cb2b674fe1b0b2c78671fe9e8e",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "d40763a94f0f4ce7a398935b5aa50ad1",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "cfb1d8204b4548978af9c8f29ed1a019",
            "status": false
          }
        ]
      ],
      "name": "整形外科",
      "status": false
    },
    {
      "contents": [
        [
          {
            "originalPrice": "0",
            "price": "0",
            "id": "00bb4a6883384413bff1253224265b69",
            "status": false
          },
          {
            "extendId": "4028b88168ffeec00168ffeecc320020",
            "originalPrice": "880",
            "price": "880",
            "id": "86c9eba115d245b88d736d511605e6c4",
            "status": true
          },
          {
            "extendId": "4028b88168ffeec00168ffeecc320020",
            "originalPrice": "680",
            "price": "680",
            "id": "35fa64589d0942da82407d092f8b9a8f",
            "status": true
          },
          {
            "originalPrice": "1080",
            "price": "1080",
            "id": "84702c92fbb94729a7dff45b1c0cadfb",
            "status": false
          },
          {
            "originalPrice": "1000",
            "price": "1000",
            "id": "15477e62ba2c4a34a315c64cebfddb5f",
            "status": false
          }
        ],
        [
          {
            "originalPrice": "",
            "price": "",
            "id": "b6c0f285baf24ffda1067f38ad338548",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "01dd909084fa428bad1f74180ac1262f",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "4a9b81a6598d44b99652a88547fc3f3f",
            "status": false
          }
        ]
      ],
      "name": "儿外科",
      "status": false
    },
    {
      "contents": [
        [
          {
            "originalPrice": "0",
            "price": "0",
            "id": "7b861f31a04045eebb4bcad635a8ee13",
            "status": false
          },
          {
            "extendId": "4028b88168ffeec00168ffeecc310011",
            "originalPrice": "1480",
            "price": "1480",
            "id": "34a2eeba232e483ba6b75fdd364a021f",
            "status": true
          },
          {
            "extendId": "4028b88168ffeec00168ffeecc310011",
            "originalPrice": "1280",
            "price": "1280",
            "id": "497a5e78255a4e01a0292f72375d9864",
            "status": true
          },
          {
            "originalPrice": "580",
            "price": "580",
            "id": "8f557bcb5cba4ca9ba59399bf312ca2f",
            "status": false
          },
          {
            "originalPrice": "1000",
            "price": "1000",
            "id": "854e6a2bc57e4d73b746d27ee3eff088",
            "status": false
          }
        ],
        [
          {
            "originalPrice": "",
            "price": "",
            "id": "22b32897df554b408451a69ab4eccd8d",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "ff6a50f09af44637af434b21de711696",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "fb144ca8234742abb7980a6ce7bf0cc1",
            "status": false
          }
        ]
      ],
      "name": "临床病理科",
      "status": false
    },
    {
      "contents": [
        [
          {
            "originalPrice": "0",
            "price": "0",
            "id": "67cca6cda5294c709da7c22134719f62",
            "status": false
          },
          {
            "extendId": "4028b88168ffeec00168ffeecc32001b",
            "originalPrice": "1480",
            "price": "1480",
            "id": "3e668748c49340d284c71c8adb7df614",
            "status": true
          },
          {
            "extendId": "4028b88168ffeec00168ffeecc32001b",
            "originalPrice": "1280",
            "price": "1280",
            "id": "713889faa0684b618a278f5cc172c9c3",
            "status": true
          },
          {
            "originalPrice": "580",
            "price": "580",
            "id": "b9cf73cca48f45a584fee2f453a3cd83",
            "status": false
          },
          {
            "originalPrice": "1000",
            "price": "1000",
            "id": "5a2a49a16efa4387b05744187fc86589",
            "status": false
          }
        ],
        [
          {
            "originalPrice": "",
            "price": "",
            "id": "ca22c2e2c5a24d11b7cfbf4b9b057067",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "8a52e48522b4413eb9a8350688dd4963",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "e24251b5a904475bab88a0fd80be9686",
            "status": false
          }
        ]
      ],
      "name": "检验医学科",
      "status": false
    },
    {
      "contents": [
        [
          {
            "originalPrice": "0",
            "price": "0",
            "id": "6f6fe705b7134814837a9b3b232b2601",
            "status": false
          },
          {
            "originalPrice": "880",
            "price": "880",
            "id": "e73b11e6130747e4a1e000838da414d3",
            "status": true
          },
          {
            "originalPrice": "680",
            "price": "680",
            "id": "e96891fa22cd4b6d8fb146f93b0ab6a1",
            "status": true
          },
          {
            "originalPrice": "580",
            "price": "580",
            "id": "366c6aedf4a1460f9b289f176a05d10d",
            "status": false
          },
          {
            "originalPrice": "1000",
            "price": "1000",
            "id": "6b434acdac604b81a5f46b0ad16ca21a",
            "status": false
          }
        ],
        [
          {
            "originalPrice": "",
            "price": "",
            "id": "9b8ce8acbdf84fee906238f9cef0643c",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "f2b36acbdeec47f7b63398fd25f65bf3",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "b0be54d9937c426fb9864cff00fba85b",
            "status": false
          }
        ]
      ],
      "name": "核医学科",
      "status": false
    },
    {
      "contents": [
        [
          {
            "originalPrice": "3000",
            "price": "3000",
            "id": "cb3798aba9d34a56a7c064f56c86132e",
            "status": false
          },
          {
            "extendId": "4028b88168ffeec00168ffeecc30000b",
            "originalPrice": "880",
            "price": "880",
            "id": "944ab38242d648128cf63e41023a0292",
            "status": true
          },
          {
            "extendId": "4028b88168ffeec00168ffeecc30000b",
            "originalPrice": "680",
            "price": "680",
            "id": "26a9b626571f4ac6b57a4889afe0ef7c",
            "status": true
          },
          {
            "originalPrice": "1080",
            "price": "1080",
            "id": "a2d6ebb3897b4dfdb8454407f76de816",
            "status": false
          },
          {
            "originalPrice": "1000",
            "price": "1000",
            "id": "f4e6973c61ab4a89951255e2b2b58ac6",
            "status": false
          }
        ],
        [
          {
            "originalPrice": "",
            "price": "",
            "id": "29c8a599edc94e5a80b269f0c473592b",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "418cbbcb1ac34b4dbfa75a68b52e82ba",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "2c1ff70b06d14cf2b7432aa598556e32",
            "status": false
          }
        ]
      ],
      "name": "口腔全科",
      "status": false
    },
    {
      "contents": [
        [
          {
            "originalPrice": "3000",
            "price": "3000",
            "id": "2161bb543dee4c3cb7a74694c5df6008",
            "status": false
          },
          {
            "extendId": "4028b88168ffeec00168ffeecc30000e",
            "originalPrice": "880",
            "price": "880",
            "id": "48c8dc553b9a44f1bff0b997bb4a3f65",
            "status": true
          },
          {
            "extendId": "4028b88168ffeec00168ffeecc30000e",
            "originalPrice": "980",
            "price": "980",
            "id": "92246807eca645dfb4d77b8162850a4c",
            "status": true
          },
          {
            "originalPrice": "1080",
            "price": "1080",
            "id": "064368b38f9b4253bcdae5e107dcc7e6",
            "status": false
          },
          {
            "originalPrice": "1000",
            "price": "1000",
            "id": "e86c605e2b2f452ea42fd5b32a2b0996",
            "status": false
          }
        ],
        [
          {
            "originalPrice": "",
            "price": "",
            "id": "9bf7e1e65cf64ad3b9bf3e5089a6bd51",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "eb17308213e146a5b54d05ab85a080fe",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "362324495b1c44a99a28d680910e8e36",
            "status": false
          }
        ]
      ],
      "name": "口腔内科",
      "status": false
    },
    {
      "contents": [
        [
          {
            "originalPrice": "3000",
            "price": "3000",
            "id": "67b8aa52cc3f44c0a495e304b68545fe",
            "status": false
          },
          {
            "extendId": "4028b88168ffeec00168ffeecc310012",
            "originalPrice": "880",
            "price": "880",
            "id": "0efd0045ed6943b985877936bd5496e2",
            "status": true
          },
          {
            "extendId": "4028b88168ffeec00168ffeecc310012",
            "originalPrice": "680",
            "price": "680",
            "id": "54e2df090c494ea897b45acc7a1e4cec",
            "status": true
          },
          {
            "originalPrice": "1080",
            "price": "1080",
            "id": "4c9d4b66586341598bc3cac1893f86e4",
            "status": false
          },
          {
            "originalPrice": "1000",
            "price": "1000",
            "id": "fc3dc93f693d4ac0af41d3d285f6e8ce",
            "status": false
          }
        ],
        [
          {
            "originalPrice": "",
            "price": "",
            "id": "5d430ac3cbf64621b4ed537befd97795",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "de4b217f764549ce87d8ed4a0ee4afed",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "bcf6c419bf85462ca60bb2c329f6f5b6",
            "status": false
          }
        ]
      ],
      "name": "口腔颌面外科",
      "status": false
    },
    {
      "contents": [
        [
          {
            "originalPrice": "3000",
            "price": "3000",
            "id": "45c1570f2f4b427eac2000944e219e19",
            "status": false
          },
          {
            "extendId": "4028b88168ffeec00168ffeecc310013",
            "originalPrice": "880",
            "price": "880",
            "id": "5a6f45abbb524404b4974301240789c3",
            "status": true
          },
          {
            "extendId": "4028b88168ffeec00168ffeecc310013",
            "originalPrice": "680",
            "price": "680",
            "id": "d59ecd2d56f040688fb2ca5c1bfc4123",
            "status": true
          },
          {
            "originalPrice": "1080",
            "price": "1080",
            "id": "e5ef078277b946d48ba9a87b09bbdab0",
            "status": false
          },
          {
            "originalPrice": "1000",
            "price": "1000",
            "id": "886eeeb8a4674e8f9434ffd4e0ba70ee",
            "status": false
          }
        ],
        [
          {
            "originalPrice": "",
            "price": "",
            "id": "465f75306b9f435db9f04c725fff9c13",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "2d1513333dcc4532934a5b305dbd6ae1",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "4eda11ea0118415ea94e72583b8aa9dd",
            "status": false
          }
        ]
      ],
      "name": "口腔修复科",
      "status": false
    },
    {
      "contents": [
        [
          {
            "originalPrice": "3000",
            "price": "3000",
            "id": "b59be28c73d344009687acdcc31ce68b",
            "status": false
          },
          {
            "extendId": "4028b88168ffeec00168ffeecc310015",
            "originalPrice": "880",
            "price": "880",
            "id": "4fe619ac7416474393cc7285305605fc",
            "status": true
          },
          {
            "extendId": "4028b88168ffeec00168ffeecc310015",
            "originalPrice": "680",
            "price": "680",
            "id": "033cf99ebd324091a47980c3a9947552",
            "status": true
          },
          {
            "originalPrice": "1080",
            "price": "1080",
            "id": "218632f7afde4f20b02589250ceeb8f4",
            "status": false
          },
          {
            "originalPrice": "1000",
            "price": "1000",
            "id": "6a4a2b01ad4f4e91b143b75c79f27d93",
            "status": false
          }
        ],
        [
          {
            "originalPrice": "",
            "price": "",
            "id": "e20f6101cbe44d2ea82ed3be5289767b",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "cf4dcec9932c4235baa6541077130d20",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "3611f375fad94ba8a15973d1dde51cc9",
            "status": false
          }
        ]
      ],
      "name": "口腔正畸科",
      "status": false
    },
    {
      "contents": [
        [
          {
            "originalPrice": "3000",
            "price": "3000",
            "id": "04b9d8f04a7b45dab5493744ed675683",
            "status": false
          },
          {
            "extendId": "4028b88168ffeec00168ffeecc310016",
            "originalPrice": "880",
            "price": "880",
            "id": "b642018cde604e95b0b7491bccf1ed6f",
            "status": true
          },
          {
            "extendId": "4028b88168ffeec00168ffeecc310016",
            "originalPrice": "680",
            "price": "680",
            "id": "78b2356c8ec0479e91e9ab0b386c7d48",
            "status": true
          },
          {
            "originalPrice": "1080",
            "price": "1080",
            "id": "8d9ff585f11a4d318ba3d1bcbd455a25",
            "status": false
          },
          {
            "originalPrice": "1000",
            "price": "1000",
            "id": "004d432873484fca946d3528e079e344",
            "status": false
          }
        ],
        [
          {
            "originalPrice": "",
            "price": "",
            "id": "8e1a28bdafdc4761805e1c066637dfcb",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "b620ff32f8704489800cae89ff0ab66d",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "1165a1301321441b96ff724b0f58fe7d",
            "status": false
          }
        ]
      ],
      "name": "口腔病理科",
      "status": false
    },
    {
      "contents": [
        [
          {
            "originalPrice": "3000",
            "price": "3000",
            "id": "cb9be9b51eed44bea5f5728bd91cd848",
            "status": false
          },
          {
            "extendId": "4028b88168ffeec00168ffeecc310014",
            "originalPrice": "880",
            "price": "880",
            "id": "978b91ea042a43e7a6e88b6913db641c",
            "status": true
          },
          {
            "extendId": "4028b88168ffeec00168ffeecc310014",
            "originalPrice": "680",
            "price": "680",
            "id": "a9a69610dad04e26804d070b3c922bdc",
            "status": true
          },
          {
            "originalPrice": "1080",
            "price": "1080",
            "id": "04deaa8e0e52407f9a0f6e400e0d70bc",
            "status": false
          },
          {
            "originalPrice": "1000",
            "price": "1000",
            "id": "a961f2b56b924c29a3776dc43193a519",
            "status": false
          }
        ],
        [
          {
            "originalPrice": "",
            "price": "",
            "id": "7f17a04c21a741be9e029d44a36c7443",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "7157642387d642e28a0be2b7428b8ebf",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "9afb50ebcd2649d49129c2fc439df950",
            "status": false
          }
        ]
      ],
      "name": "口腔颌面影像科",
      "status": false
    },
    {
      "contents": [
        [
          {
            "originalPrice": "0",
            "price": "0",
            "id": "23edc3eebe104dc88350fe4d7584d484",
            "status": false
          },
          {
            "extendId": "4028b88168ffeec00168ffeecc310017",
            "originalPrice": "880",
            "price": "880",
            "id": "9c434e0bd3c249478907657882ddd29b",
            "status": true
          },
          {
            "extendId": "4028b88168ffeec00168ffeecc310017",
            "originalPrice": "1280",
            "price": "1280",
            "id": "bd4f536584cd4284a28da172a046492f",
            "status": true
          },
          {
            "originalPrice": "580",
            "price": "580",
            "id": "07acf00dad53400e8351f7da2f0d6898",
            "status": false
          },
          {
            "originalPrice": "1000",
            "price": "1000",
            "id": "924304c709e44ca7913adc633a8e810d",
            "status": false
          }
        ],
        [
          {
            "originalPrice": "",
            "price": "",
            "id": "a25a156d8bf4437d818acc3ae19cf706",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "07399c6be0154f31bffc2710e663dd4b",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "1753f250b79244bbbc11ab5242d94aea",
            "status": false
          }
        ]
      ],
      "name": "医学遗传科",
      "status": false
    },
    {
      "contents": [
        [
          {
            "originalPrice": "0",
            "price": "0",
            "id": "6fbf21af04044ae7a6e2adb0dd3b97e5",
            "status": false
          },
          {
            "extendId": "4028b88168ffeec00168ffeecc32001c",
            "originalPrice": "880",
            "price": "880",
            "id": "9e31b0598d7146848e4f169c03bce2fc",
            "status": true
          },
          {
            "extendId": "4028b88168ffeec00168ffeecc32001c",
            "originalPrice": "1280",
            "price": "1280",
            "id": "65351da35fd84c9d8786afda94dc333b",
            "status": true
          },
          {
            "originalPrice": "580",
            "price": "580",
            "id": "2fc50b4aa0304d78831861e48f12e851",
            "status": false
          },
          {
            "originalPrice": "1000",
            "price": "1000",
            "id": "cb5b72125ca84ca0b5d5a68b75636f63",
            "status": false
          }
        ],
        [
          {
            "originalPrice": "",
            "price": "",
            "id": "eb06573a13d14fdeb6acaf41fb99331b",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "49787a1cb28f4b198c0ecd44d9423162",
            "status": false
          },
          {
            "originalPrice": "",
            "price": "",
            "id": "6040c016d8fc44ebabf9124d3aa86072",
            "status": false
          }
        ]
      ],
      "name": "预防医学科",
      "status": false
    }
  ];

  x = 0;

  y = 0;

  contents = [
    {
      name: '基础版通关包介绍',
      introduce: '权威名师参与设计，五大备考学习模块，360度全方位特训，顺利通关结业考',
      items: [
        {
          cover: 'assets/imgs/cover1.png',
          name: '名师精讲课',
          introduce: '高清视频讲解，经典考点点播，帮助学员，拨开迷雾，的见真解',
        },
        {
          cover: 'assets/imgs/cover2.png',
          name: '精品试卷',
          introduce: '专家甄选试题，大数据分析组卷，有效查漏补缺，检阅知识点盲区',
        },
        {
          cover: 'assets/imgs/cover3.png',
          name: '精品题库',
          introduce: '覆盖住培各个专业，紧扣考试大纲，百万练习题，自由随练',
        },
        {
          cover: 'assets/imgs/cover4.png',
          name: '住培技能考核视频',
          introduce: '权威专家把关，专业团队录制，精准复习技能操作，无忧通关技能考',
        },
        {
          cover: 'assets/imgs/cover5.png',
          name: '住培通用教材',
          introduce: '全媒体数字教材，动画、图表、视频多种形式，易学、易记、易用',
        }
      ]
    },
    {
      name: '拓展版通关包介绍',
      introduce: '培养临床思维能力、提升疾病诊治水平，适配住培各专业全阶段的拓展学习',
      items: [
        {
          cover: 'assets/imgs/cover7.jpg',
          name: '疾病诊疗教程',
          introduce: '遵循临床路径，以诊治过程为主线，全方位讲解，精准指导诊疗每一环节',
        },
        {
          cover: 'assets/imgs/cover8.jpg',
          name: '三基随手查数据库',
          introduce: '5500万字海量内容、随时随地、随手查询，住培备考必备神器',
        }
      ]
    }
  ];

  expend = false;

  own: string[] = [];

  result: Observable<AppVersion>;

  constructor(private navCtrl: NavController,
              public httpService: HttpServiceProvider,
              private webCallAppProvider: WebCallAppProvider,
              private store: Store<AppVersion>) {
    this.result = this.store.pipe(select('appVersion'));
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad ProductPanelPage');
    this.result.subscribe(appversion => {
      this.httpService.getExamRstList(appversion.token, '2019').subscribe(ids => {
        this.own.push(...ids);
      });
    })
  }

  goBack() {
    if (this.navCtrl.canGoBack()) {
      this.navCtrl.pop().catch();
    } else {
      this.webCallAppProvider.WebCallApp("CmdGoBack");
    }
  }

  currentSubject() {
    return this.subject[this.x]['contents'][this.y];
  }

  goToPage(index) {
    this.x = index;
  }

  switch(index) {
    this.y = index;
  }

  change() {
    this.expend = !this.expend;
  }

  buy(id) {
    this.navCtrl.push('product-info', {id}).catch();
  }

  learn(id, z, extendId) {
    if (extendId) id = extendId;
    this.result.subscribe(appversion => {
      let url = rstExamUrl + `?token=${appversion.token}&packageId=${id}&platform=ebook&skillbook=2019&newebook=1`;
      if (z == 1 || z == 2) {
        let array = [z];
        if (this.own.includes(this.currentSubject()[3 - z]['id'])) {
          array.push(3 - z);
        }
        url += `&purchased=${JSON.stringify(array)}`;
      }
      console.log(url);
      this.webCallAppProvider.WebCallApp("CmdOpenUrl", {url,});
    })
  }

  locate() {
    this.navCtrl.push('product-list', {title: '考试培训', key: 'exam-rst'}).catch();
  }

}

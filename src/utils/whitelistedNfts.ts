interface OracleEntry {
    name: string;
    oracle_address: string;
    floor: string;
    slug: string
  }
  
interface OracleList {
[key: string]: OracleEntry;
}

export const oracleList: OracleList = {
    // "0x34d85c9cdeb23fa97cb08333b511ac86e1c4e258": {
    //     "name": "OTHERDEED FOR OTHERSIDE",
    //     "oracle_address": "0x7515Af5f7944345a7ed944b41bC16836ac3f5298",
    //     "floor": "0.46399908",
    //     "slug": "otherdeed",
    // },
    "0xbd3531da5cf5857e7cfaa92426877b022e612cf8": {
        "name": "PUDGY PENGUINS",
        "oracle_address": "0x7515Af5f7944345a7ed944b41bC16836ac3f5298",
        "floor": "3.8997",
        "slug": "pudgypenguins"
    },
    "0xa3aee8bce55beea1951ef834b99f3ac60d1abeeb": {
        "name": "VeeFriends",
        "oracle_address": "0x7515Af5f7944345a7ed944b41bC16836ac3f5298",
        "floor": "1.5628",
        "slug": "veefriends"
    },
    "0xe785e82358879f061bc3dcac6f0444462d4b5330": {
        "name": "World of Women",
        "oracle_address": "0x7515Af5f7944345a7ed944b41bC16836ac3f5298",
        "floor": "0.570000",
        "slug": "world-of-women-nft"
    },
    "0x23581767a106ae21c074b2276d25e5c3e136a68b": {
        "name": "MOONBIRDS",
        "oracle_address": "0x7515Af5f7944345a7ed944b41bC16836ac3f5298",
        "floor": "1.1213",
        "slug": "proof-moonbirds"
    },
    "0x60e4d786628fea6478f785a6d7e704777c86a7c6": {
        "name": "Mutant Ape Yacht Club",
        "oracle_address": "0x7515Af5f7944345a7ed944b41bC16836ac3f5298",
        "floor": "4.6739",
        "slug": "mutant-ape-yacht-club"
    },
    "0x8a90cab2b38dba80c64b7734e58ee1db38b8992e": {
        "name": "Doodles",
        "oracle_address": "0x7515Af5f7944345a7ed944b41bC16836ac3f5298",
        "floor": "1.1551",
        "slug": "doodles-official"
    },
    "0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb": {
        "name": "Cryptopunks",
        "oracle_address": "0x7515Af5f7944345a7ed944b41bC16836ac3f5298",
        "floor": "44.8459",
        "slug": "cryptopunks"
    },
    "0x1cb1a5e65610aeff2551a50f76a87a7d3fb649c6": {
        "name": "Cryptoadz",
        "oracle_address": "0x7515Af5f7944345a7ed944b41bC16836ac3f5298",
        "floor": "0.53729539",
        "slug": "cryptoadz-by-gremplin"
    },
    "0x1a92f7381b9f03921564a437210bb9396471050c": {
        "name": "Cool Cats",
        "oracle_address": "0x7515Af5f7944345a7ed944b41bC16836ac3f5298",
        "floor": "0.43304997",
        "slug": "cool-cats-nft"
    },
    "0x49cf6f5d44e70224e2e23fdcdd2c053f30ada28b": {
        "name": "CloneX",
        "oracle_address": "0x7515Af5f7944345a7ed944b41bC16836ac3f5298",
        "floor": "1.2501",
        "slug": "clonex"
    },
    "0x306b1ea3ecdf94ab739f1910bbda052ed4a9f949": {
        "name": "BEANZ OFFICIAL",
        "oracle_address": "0x7515Af5f7944345a7ed944b41bC16836ac3f5298",
        "floor": "0.21797198",
        "slug": "beanzofficial"
    },
    "0xed5af388653567af2f388e6224dc7c4b3241c544": {
        "name": "Azuki",
        "oracle_address": "0x7515Af5f7944345a7ed944b41bC16836ac3f5298",
        "floor": "3.5523",
        "slug": "azuki"
    },
    "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d": {
        "name": "Bored Ape Yacht Club",
        "oracle_address": "0x7515Af5f7944345a7ed944b41bC16836ac3f5298",
        "floor": "3.5523",
        "slug": "boredapeyachtclub"
    },
    "0x889fbf30d42602cf8086fd54874f5040def086be": {
        "name": "Rangeesh Collection",
        "oracle_address": "0x7515Af5f7944345a7ed944b41bC16836ac3f5298",
        "floor": "0.01",
        "slug": "rangeesh-collection"
    }
}

export function getOracleAddress(addressKey: string): string | null {
    if (oracleList[addressKey]) {
        return oracleList[addressKey].oracle_address;
    } else {
        console.log("No entry found for the given address key.");
        return ''; // Or return undefined, depending on your error handling preference
    }
}


export function getSlugByKey( key: string): string {
    // Normalize the key to ensure case insensitivity
    const normalizedKey = key.toLowerCase();

    // Retrieve the oracle by the normalized key
    const oracle = oracleList[normalizedKey];

    // Return the slug if the oracle exists
    return oracle ? oracle.slug : "";
}
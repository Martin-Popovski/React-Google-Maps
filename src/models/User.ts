
     interface Company {
        id: number;
        agricultureTypes: string[];
        description: string;
        logoPath?: any;
        name: string;
        productionTypes: string[];
        translatedUserType: string;
        userTypeIdentifier: string;
    }

     interface Position {
        lng: number;
        lat: number;
    }

    export interface User {
        id: number;
        addressId: number;
        company: Company;
        listingsCount: number;
        position: Position;
        primaryTradeType: string;
        userId: number;
        userTypeIdentifier: string;
        userMarkerColor?:any;
    }
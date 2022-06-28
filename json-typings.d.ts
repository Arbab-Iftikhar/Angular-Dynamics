//Configuration to enable the read of json file
declare module "*.json" {
    const value: any;
    export default value;
    }
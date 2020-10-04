export class ProductItem {
    constructor(
        public id: number = null,
        public category: string,
        public name: string,
        public author: string,
        public description: string,
        public price: number,
        public isAvailable: boolean = true,
    ) {}
}

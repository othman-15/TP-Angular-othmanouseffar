export class Product {
  // Déclaration explicite de l'attribut
  private readonly _productID: string;
  private _productTitle!: string;
  private _productPrice!: string;
  private _quantity!: number;
  private _image!: string;

  constructor(productID: string) {
    this._productID = productID;
  }

  // Getter pour productID
  public get productID(): string {
    return this._productID;
  }

  // Getters & Setters
  public get productTitle(): string {
    return this._productTitle;
  }
  public set productTitle(value: string) {
    this._productTitle = value;
  }

  public get productPrice(): string {
    return this._productPrice;
  }
  public set productPrice(value: string) {
    this._productPrice = value;
  }

  public get quantity(): number {
    return this._quantity;
  }
  public set quantity(value: number) {
    this._quantity = value;
  }

  public get image(): string {
    return this._image;
  }
  public set image(value: string) {
    this._image = value;
  }

  public printProduct(): string {
    return `productID: ${this.productID}, productTitle: ${this.productTitle}, productPrice: ${this.productPrice}, quantity: ${this.quantity}, image: ${this.image}`;
  }
}

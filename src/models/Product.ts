export class Product {
  private readonly _productID: string;
  private _productTitle!: string;
  private _productPrice!: number; // changée en number
  private _quantity!: number;
  private _image!: string;
  private _category!: string;
  private _colors!: string[];
  public favorite: boolean = false;

  constructor(productID: string) {
    this._productID = productID;
  }

  // Getters & Setters
  public get productID(): string {
    return this._productID;
  }

  public get productTitle(): string {
    return this._productTitle;
  }
  public set productTitle(value: string) {
    this._productTitle = value;
  }

  public get productPrice(): number {
    return this._productPrice;
  }
  public set productPrice(value: number) {
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

  public get category(): string {
    return this._category;
  }
  public set category(value: string) {
    this._category = value;
  }

  public get colors(): string[] {
    return this._colors;
  }
  public set colors(value: string[]) {
    this._colors = value;
  }

  public printProduct(): string {
    return `productID: ${this.productID}, productTitle: ${this.productTitle}, productPrice: ${this.productPrice}, quantity: ${this.quantity}, category: ${this.category}, image: ${this.image}, colors: ${this.colors.join(", ")}`;
  }
}

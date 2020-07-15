export class PharmacologicalClass {
    code:number;
    description: string;

    get codeDescription() {
        return `${this.code} - ${this.description}`;
    }
}
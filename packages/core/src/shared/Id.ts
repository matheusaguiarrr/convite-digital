export default class Id {
    static novo(){
        return `${this.hash()}-${this.hash()}-${this.hash()}`
    }

    private static hash(){
        return Math.random().toString(36).substring(2, 15);
    }
}
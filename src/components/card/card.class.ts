interface CardType {
    id: string;
    color: string;
    opened: boolean;
    open: () => void;
    close: () => void;
}

class Card implements CardType {
    id: string
    color
    opened
    constructor(id: string, color: string, opened: boolean) {
        this.id = id
        this.color = color
        this.opened = opened
    }
    open() {
        this.opened = true
    }
    close() {
        this.opened = false
    }
}

export { Card }
export type { CardType }
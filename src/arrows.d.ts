declare module 'arrows-svg' {
    export enum DIRECTION {
        TOP_LEFT = 'top-left',
        TOP = 'top',
        TOP_RIGHT = 'top-right',
        RIGHT = 'right',
        BOTTOM_LEFT = 'bottom-left',
        BOTTOM = 'bottom',
        BOTTOM_RIGHT = 'bottom-right',
        LEFT = 'left',
    }

    export enum HEAD {
        DIAMOND = () => any,
        DOT = () => any,
        IMAGE = () => any,
        INV = () => any,
        NONE = () => any,
        NORMAL = () => any,
        THIN = () => any,
        VEE = () => any,
    }

    interface IArrow {
        node: DocumentFragment;
        clear: () => void;
    }

    type HeadFactory = {
        func: HEAD;
        size: number;
    };

    type Anchor =
        | {
              node: HTMLElement | (() => HTMLElement);
              direction: DIRECTION;
              translation?: [number, number];
          }
        | HTMLElement
        | (() => HTMLElement);

    interface IArrowProps {
        className?: string;
        head?: HeadFactory;
        from: Anchor;
        to: Anchor;
    }

    export default function arrowCreate(props: IArrowProps): IArrow;
}

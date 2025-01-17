import {
    Directive,
    ElementRef,
    EventEmitter,
    HostBinding,
    Input,
    Output,
    Renderer2,
    Optional,
    Inject,
    booleanAttribute
} from '@angular/core';
import { DisplayDensityToken, IDisplayDensityOptions } from '../../core/density';
import { mkenum } from '../../core/utils';
import { IBaseEventArgs } from '../../core/utils';
import { IgxBaseButtonType, IgxButtonBaseDirective } from './button-base';

const IgxButtonType = mkenum({
    ...IgxBaseButtonType,
    FAB: 'fab'
});

/**
 * Determines the Button type.
 */
export type IgxButtonType = typeof IgxButtonType[keyof typeof IgxButtonType];

/**
 * The Button directive provides the Ignite UI Button functionality to every component that's intended to be used as a button.
 *
 * @igxModule IgxButtonModule
 *
 * @igxParent Data Entry & Display
 *
 * @igxTheme igx-button-theme
 *
 * @igxKeywords button, span, div, click
 *
 * @remarks
 * The Ignite UI Button directive is intended to be used by any button, span or div and turn it into a fully functional button.
 *
 * @example
 * ```html
 * <button type="button" igxButton="outlined">A Button</button>
 * ```
 */
@Directive({
    selector: '[igxButton]',
    standalone: true
})
export class IgxButtonDirective extends IgxButtonBaseDirective {
    private static ngAcceptInputType_type: IgxButtonType | '';

    /**
     * Called when the button is selected.
     */
    @Output()
    public buttonSelected = new EventEmitter<IButtonEventArgs>();

    /**
     * @hidden
     * @internal
     */
    @HostBinding('class.igx-button')
    public _cssClass = 'igx-button';

    /**
     * @hidden
     * @internal
     */
    private _type: IgxButtonType;

    /**
     * @hidden
     * @internal
     */
    private _color: string;

    /**
     * @hidden
     * @internal
     */
    private _label: string;

    /**
     * @hidden
     * @internal
     */
    private _backgroundColor: string;

    /**
     * @hidden
     * @internal
     */
    private _selected = false;

    /**
     * Gets or sets whether the button is selected.
     * Mainly used in the IgxButtonGroup component and it will have no effect if set separately.
     *
     * @example
     * ```html
     * <button type="button" igxButton="flat" [selected]="button.selected"></button>
     * ```
     */
    @Input({ transform: booleanAttribute })
    public set selected(value: boolean) {
        if (this._selected !== value) {

            this._selected = value;

            this.buttonSelected.emit({
                button: this
            });

        }
    }

    public get selected(): boolean {
        return this._selected;
    }

    constructor(
        public override element: ElementRef,
        @Optional() @Inject(DisplayDensityToken)
        protected override _displayDensityOptions: IDisplayDensityOptions,
        private _renderer: Renderer2,
    ) {
        super(element, _displayDensityOptions);
    }

    /**
     * Sets the type of the button.
     *
     * @example
     * ```html
     * <button type="button" igxButton="outlined"></button>
     * ```
     */
    @Input('igxButton')
    public set type(type: IgxButtonType) {
        const t = type ? type : IgxButtonType.Flat;
        if (this._type !== t) {
            this._type = t;
        }
    }

    /**
     * @deprecated in version 17.1.0.
     * Sets the button text color.
     *
     * @example
     * ```html
     * <button type="button" igxButton igxButtonColor="orange"></button>
     * ```
     */
    @Input('igxButtonColor')
    public set color(value: string) {
        this._color = value || this.nativeElement.style.color;
        this._renderer.setStyle(this.nativeElement, 'color', this._color);
    }

    /**
     * @deprecated in version 17.1.0.
     * Sets the background color of the button.
     *
     * @example
     *  ```html
     * <button type="button" igxButton igxButtonBackground="red"></button>
     * ```
     */
    @Input('igxButtonBackground')
    public set background(value: string) {
        this._backgroundColor = value || this._backgroundColor;
        this._renderer.setStyle(this.nativeElement, 'background', this._backgroundColor);
    }

    /**
     * Sets the `aria-label` attribute.
     *
     * @example
     *  ```html
     * <button type="button" igxButton="flat" igxLabel="Label"></button>
     * ```
     */
    @Input('igxLabel')
    public set label(value: string) {
        this._label = value || this._label;
        this._renderer.setAttribute(this.nativeElement, 'aria-label', this._label);
    }

    /**
     * @hidden
     * @internal
     */
    @HostBinding('class.igx-button--flat')
    public get flat(): boolean {
        return this._type === IgxButtonType.Flat;
    }

    /**
     * @hidden
     * @internal
     */
    @HostBinding('class.igx-button--contained')
    public get contained(): boolean {
        return this._type === IgxButtonType.Contained;
    }

    /**
     * @hidden
     * @internal
     */
    @HostBinding('class.igx-button--outlined')
    public get outlined(): boolean {
        return this._type === IgxButtonType.Outlined;
    }

    /**
     * @hidden
     * @internal
     */
    @HostBinding('class.igx-button--fab')
    public get fab(): boolean {
        return this._type === IgxButtonType.FAB;
    }

    /**
     * @hidden
     * @internal
     */
    @HostBinding('style.--component-size')
    public get componentSize() {
        return this.getComponentSizeStyles();
    }

    /**
     * @hidden
     * @internal
     */
    public select() {
        this.selected = true;
    }

    /**
     * @hidden
     * @internal
     */
    public deselect() {
        this._selected = false;
    }
}

export interface IButtonEventArgs extends IBaseEventArgs {
    button: IgxButtonDirective;
}

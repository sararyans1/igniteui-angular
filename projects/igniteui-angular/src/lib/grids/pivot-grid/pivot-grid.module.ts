import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { IgxDragDropModule } from "../../directives/drag-drop/drag-drop.directive";
import { IgxExpansionPanelModule } from "../../expansion-panel/expansion-panel.module";
import { IgxGridComponent } from "../grid/grid.component";
import { IgxGridModule } from "../grid/grid.module";
import { IgxPivotDataSelectorComponent } from "./pivot-data-selector.component";
import { IgxPivotGridComponent } from "./pivot-grid.component";
import {
    IgxFilterPivotItemsPipe,
    IgxPivotAutoTransform,
    IgxPivotCellMergingPipe,
    IgxPivotColumnPipe,
    IgxPivotGridColumnSortingPipe,
    IgxPivotGridFilterPipe,
    IgxPivotGridSortingPipe,
    IgxPivotRowExpansionPipe,
    IgxPivotRowPipe
} from "./pivot-grid.pipes";
import { IgxPivotHeaderRowComponent } from "./pivot-header-row.component";
import { IgxPivotRowDimensionContentComponent } from "./pivot-row-dimension-content.component";
import { IgxPivotRowDimensionHeaderGroupComponent } from "./pivot-row-dimension-header-group.component";
import { IgxPivotRowDimensionHeaderComponent } from "./pivot-row-dimension-header.component";
import { IgxPivotRowComponent } from "./pivot-row.component";

/**
 * @hidden
 */
@NgModule({
    declarations: [
        IgxPivotGridComponent,
        IgxPivotRowComponent,
        IgxPivotHeaderRowComponent,
        IgxPivotRowDimensionContentComponent,
        IgxPivotRowDimensionHeaderComponent,
        IgxPivotRowDimensionHeaderGroupComponent,
        IgxPivotRowPipe,
        IgxPivotRowExpansionPipe,
        IgxPivotAutoTransform,
        IgxPivotColumnPipe,
        IgxPivotGridFilterPipe,
        IgxPivotGridSortingPipe,
        IgxPivotGridColumnSortingPipe,
        IgxPivotCellMergingPipe,
        IgxFilterPivotItemsPipe,
        IgxPivotDataSelectorComponent,
    ],
    exports: [
        IgxGridModule,
        IgxPivotGridComponent,
        IgxPivotRowComponent,
        IgxPivotHeaderRowComponent,
        IgxPivotRowDimensionContentComponent,
        IgxPivotRowDimensionHeaderComponent,
        IgxPivotRowDimensionHeaderGroupComponent,
        IgxPivotRowExpansionPipe,
        IgxPivotAutoTransform,
        IgxPivotRowPipe,
        IgxPivotColumnPipe,
        IgxPivotGridFilterPipe,
        IgxPivotGridSortingPipe,
        IgxPivotGridColumnSortingPipe,
        IgxPivotCellMergingPipe,
        IgxFilterPivotItemsPipe,
        IgxPivotDataSelectorComponent,
    ],
    imports: [IgxGridModule, IgxExpansionPanelModule, IgxDragDropModule],
    entryComponents: [IgxGridComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class IgxPivotGridModule {}
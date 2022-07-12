import { Inject, Pipe, PipeTransform } from '@angular/core';
import { cloneArray } from '../core/utils';
import { DataUtil } from '../data-operations/data-util';
import { DefaultSortingStrategy, SortingDirection } from '../data-operations/sorting-strategy';
import { IgxComboBase, IGX_COMBO_COMPONENT } from './combo.common';
import { IComboFilteringOptions } from './combo.component';

/** @hidden */
@Pipe({
    name: 'comboClean'
})
export class IgxComboCleanPipe implements PipeTransform {
    public transform(collection: any[]) {
        return collection.filter(e => !!e);
    }
}

/** @hidden */
@Pipe({
    name: 'comboFiltering'
})
export class IgxComboFilteringPipe implements PipeTransform {
    private displayKey: any;
    private _defaultFilterFunction = (collection: any[], searchValue: any, matchCase: boolean): any[] => {
        if (!searchValue) {
            return collection;
        }
        const searchTerm = matchCase ? searchValue.trim() : searchValue.toLowerCase().trim();
        if (this.displayKey != null) {
            return collection.filter(e => matchCase ?
                e[this.displayKey]?.includes(searchTerm) :
                e[this.displayKey]?.toString().toLowerCase().includes(searchTerm));
        } else {
            return collection.filter(e => matchCase ?
                e.includes(searchTerm) :
                e.toString().toLowerCase().includes(searchTerm));
        }
    }

    public transform(
        collection: any[],
        filterFunction: (collection: any[], searchValue: any, caseSensitive: boolean) => any[],
        searchValue: any,
        filteringOptions: IComboFilteringOptions,
        filterable: boolean,
        displayKey: any) {
        if (!collection) {
            return [];
        }
        if (!filterable) {
            return collection;
        }
        this.displayKey = displayKey;
        filterFunction = filterFunction ?? this._defaultFilterFunction;
        return filterFunction(collection, searchValue, filteringOptions.caseSensitive);
    }
}

/** @hidden */
@Pipe({ name: 'comboGrouping' })
export class IgxComboGroupingPipe implements PipeTransform {

    constructor(@Inject(IGX_COMBO_COMPONENT) public combo: IgxComboBase) { }

    public transform(collection: any[], groupKey: any, valueKey: any, sortingDirection: SortingDirection) {
        this.combo.filteredData = collection;
        if ((!groupKey && groupKey !== 0) || !collection.length) {
            return collection;
        }
        const sorted = DataUtil.sort(cloneArray(collection), [{
            fieldName: groupKey,
            dir: sortingDirection,
            ignoreCase: true,
            strategy: DefaultSortingStrategy.instance()
        }]);
        const data = cloneArray(sorted);
        let inserts = 0;
        let currentHeader = null;
        for (let i = 0; i < sorted.length; i++) {
            let insertFlag = 0;
            if (currentHeader !== sorted[i][groupKey]) {
                currentHeader = sorted[i][groupKey];
                insertFlag = 1;
            }
            if (insertFlag) {
                data.splice(i + inserts, 0, {
                    [valueKey]: currentHeader,
                    [groupKey]: currentHeader,
                    isHeader: true
                });
                inserts++;
            }
        }
        return data;
    }
}

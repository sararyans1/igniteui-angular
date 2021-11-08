import { IgxDateSummaryOperand, IgxNumberSummaryOperand, IgxTimeSummaryOperand } from '../summaries/grid-summary';
import { IPivotAggregator } from './pivot-grid.interface';


export class IgxPivotAggregate {
    /**
     * Gets array with default aggregator function for base aggregation.
     * ```typescript
     * IgxPivotAggregate.aggregators();
     * ```
     *
     * @memberof IgxPivotAggregate
     */
    public static aggregators() {
        return [{
            key: 'count',
            label: 'Count',
            aggregator: IgxPivotAggregate.count
        }];
    }
    /**
     * Counts all the records in the data source.
     * If filtering is applied, counts only the filtered records.
     * ```typescript
     * IgxSummaryOperand.count(dataSource);
     * ```
     *
     * @memberof IgxPivotAggregate
     */
    public static count(members: number[]): number {
        return members.length;
    }
}

export class IgxPivotNumericAggregate extends IgxPivotAggregate {

    /**
     * Gets array with default aggregator function for numeric aggregation.
     * ```typescript
     * IgxPivotAggregate.aggregators();
     * ```
     *
     * @memberof IgxPivotAggregate
     */
    public static aggregators() {
        let result: IPivotAggregator[] = [];
        result = result.concat(super.aggregators());
        result.push({
            key: 'min',
            label: 'Min',
            aggregator: IgxPivotNumericAggregate.min
        });
        result.push({
            key: 'max',
            label: 'Max',
            aggregator: IgxPivotNumericAggregate.max
        });

        result.push({
            key: 'sum',
            label: 'Sum',
            aggregator: IgxPivotNumericAggregate.sum
        });

        result.push({
            key: 'average',
            label: 'Avg',
            aggregator: IgxPivotNumericAggregate.average
        });
        return result;
    }

    /**
     * Returns the minimum numeric value in the provided data records.
     * If filtering is applied, returns the minimum value in the filtered data records.
     * ```typescript
     * IgxPivotNumericAggregate.min(members, data);
     * ```
     *
     * @memberof IgxPivotNumericAggregate
     */
    public static min(members: number[]): number {
        return IgxNumberSummaryOperand.min(members);
    }

    /**
     * Returns the maximum numeric value in the provided data records.
     * If filtering is applied, returns the maximum value in the filtered data records.
     * ```typescript
     * IgxPivotNumericAggregate.max(data);
     * ```
     *
     * @memberof IgxPivotNumericAggregate
     */
    public static max(members: number[]): number {
        return IgxNumberSummaryOperand.max(members);
    }

    /**
     * Returns the sum of the numeric values in the provided data records.
     * If filtering is applied, returns the sum of the numeric values in the data records.
     * ```typescript
     * IgxPivotNumericAggregate.sum(data);
     * ```
     *
     * @memberof IgxPivotNumericAggregate
     */
    public static sum(members: number[]): number {
        return IgxNumberSummaryOperand.sum(members);
    }

    /**
     * Returns the average numeric value in the data provided data records.
     * If filtering is applied, returns the average numeric value in the filtered data records.
     * ```typescript
     * IgxPivotNumericAggregate.average(data);
     * ```
     *
     * @memberof IgxPivotNumericAggregate
     */
    public static average(members: number[]): number {
        return IgxNumberSummaryOperand.average(members);
    }
}

export class IgxPivotDateAggregate extends IgxPivotAggregate {
    /**
     * Gets array with default aggregator function for date aggregation.
     * ```typescript
     * IgxPivotDateAggregate.aggregators();
     * ```
     *
     * @memberof IgxPivotAggregate
     */
    public static aggregators() {
        let result: IPivotAggregator[] = [];
        result = result.concat(super.aggregators());
        result.push({
            key: 'latest',
            label: 'Latest',
            aggregator: IgxPivotDateAggregate.latest
        });
        result.push({
            key: 'earliest',
            label: 'Earliest',
            aggregator: IgxPivotDateAggregate.earliest
        });
        return result;
    }
    /**
     * Returns the latest date value in the data records.
     * If filtering is applied, returns the latest date value in the filtered data records.
     * ```typescript
     * IgxPivotDateAggregate.latest(data);
     * ```
     *
     * @memberof IgxPivotDateAggregate
     */
    public static latest(members: number[]) {
        return IgxDateSummaryOperand.latest(members);
    }

    /**
     * Returns the earliest date value in the data records.
     * If filtering is applied, returns the latest date value in the filtered data records.
     * ```typescript
     * IgxPivotDateAggregate.earliest(data);
     * ```
     *
     * @memberof IgxPivotDateAggregate
     */
    public static earliest(members: number[]) {
        return IgxDateSummaryOperand.earliest(members);
    }
}

export class IgxPivotTimeAggregate extends IgxPivotAggregate {
    /**
     * Gets array with default aggregator function for time aggregation.
     * ```typescript
     * IgxPivotTimeAggregate.aggregators();
     * ```
     *
     * @memberof IgxPivotAggregate
     */
    public static aggregators() {
        let result: IPivotAggregator[] = [];
        result = result.concat(super.aggregators());
        result.push({
            key: 'latestTime',
            label: 'Latest Time',
            aggregator: IgxPivotTimeAggregate.latestTime
        });
        result.push({
            key: 'earliestTime',
            label: 'Earliest Time',
            aggregator: IgxPivotTimeAggregate.earliestTime
        });
        return result;
    }

    /**
     * Returns the latest time value in the data records. Compare only the time part of the date.
     * If filtering is applied, returns the latest time value in the filtered data records.
     * ```typescript
     * IgxPivotTimeAggregate.latestTime(data);
     * ```
     *
     * @memberof IgxPivotTimeAggregate
     */
    public static latestTime(members: number[]) {
        return IgxTimeSummaryOperand.latestTime(members);
    }

    /**
     * Returns the earliest time value in the data records. Compare only the time part of the date.
     * If filtering is applied, returns the earliest time value in the filtered data records.
     * ```typescript
     * IgxPivotTimeAggregate.earliestTime(data);
     * ```
     *
     * @memberof IgxPivotTimeAggregate
     */
    public static earliestTime(members: number[]) {
        return IgxTimeSummaryOperand.earliestTime(members);
    }
}

import Component from '@glimmer/component';
import { action } from '@ember/object';
import ModelsTableColumn from 'ember-models-table/utils/emt/emt-column';
import DefaultTheme from 'ember-models-table/services/emt-themes/default';
import { ModelsTableDataItem } from '../../../models-table';

export interface RowGroupToggleArgs {
  /**
   * Value of `currentGroupingPropertyName` for current group
   */
  groupedValue: string;
  /**
   * Bound from {@link DefaultTheme.RowArgs.currentGroupingPropertyName | RowArgs.currentGroupingPropertyName}
   */
  currentGroupingPropertyName: string;
  /**
   * Same as {@link DefaultTheme.RowArgs.displayGroupedValueAs | RowArgs.displayGroupedValueAs}
   */
  displayGroupedValueAs: string;
  /**
   * Bound from {@link DefaultTheme.RowArgs.visibleProcessedColumns | RowArgs.visibleProcessedColumns}
   */
  visibleProcessedColumns: ModelsTableColumn[];
  /**
   * Length of `groupedItems`
   */
  groupedLength: number;
  /**
   * Bound from {@link DefaultTheme.RowArgs.groupedItems | RowArgs.groupedItems}
   */
  groupedItems: ModelsTableDataItem[];
  /**
   * Bound from {@link DefaultTheme.RowArgs.visibleGroupedItems | RowArgs.visibleGroupedItems}
   */
  visibleGroupedItems: ModelsTableDataItem[];
  /**
   * Bound from {@link DefaultTheme.Row.selectedGroupedItems | Row.selectedGroupedItems}
   */
  selectedGroupedItems: ModelsTableDataItem[];
  /**
   * Bound from {@link DefaultTheme.Row.expandedGroupedItems | Row.expandedGroupedItems}
   */
  expandedGroupedItems: ModelsTableDataItem[];
  /**
   * Bound from {@link DefaultTheme.RowArgs.themeInstance | RowArgs.themeInstance}
   */
  themeInstance: DefaultTheme;
  /**
   * Is current group collapsed
   */
  groupIsCollapsed: boolean;
  /**
   * Bound from {@link DefaultTheme.RowArgs.toggleGroupedRows | RowArgs.toggleGroupedRows}
   *
   * @event toggleGroupedRows
   */
  toggleGroupedRows: (v: string) => void;
  /**
   * Bound from {@link DefaultTheme.RowArgs.toggleGroupedRowsSelection | RowArgs.toggleGroupedRowsSelection}
   *
   * @event toggleGroupedRowsSelection
   */
  toggleGroupedRowsSelection: (v: string) => void;
  /**
   * Bound from {@link DefaultTheme.RowArgs.toggleGroupedRowsExpands | RowArgs.toggleGroupedRowsExpands}
   *
   * @event toggleGroupedRowsExpands
   */
  toggleGroupedRowsExpands: (v: string) => void;
}

/**
 * Component is used to toggle rows group visibility
 *
 * Don't override this component. Use {@link DefaultTheme.RowArgs.groupingRowComponent | RowArgs.groupingRowComponent} (it may extend this one)
 */
export default class RowGroupToggle extends Component<RowGroupToggleArgs> {
  /**
   * @event toggleGroupedRows
   */
  @action
  protected doToggleGroupedRows(e: Event): boolean {
    this.args.toggleGroupedRows(this.args.groupedValue);
    e?.stopPropagation?.();
    return false;
  }

  /**
   * @event toggleGroupedRowsSelection
   */
  @action
  protected doToggleGroupedRowsSelection(e: Event): boolean {
    this.args.toggleGroupedRowsSelection(this.args.groupedValue);
    e?.stopPropagation?.();
    return false;
  }

  /**
   * @event toggleGroupedRowsExpands
   */
  @action
  protected doToggleGroupedRowsExpands(e: Event): boolean {
    this.args.toggleGroupedRowsExpands(this.args.groupedValue);
    e?.stopPropagation?.();
    return false;
  }
}

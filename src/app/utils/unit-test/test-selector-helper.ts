import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { elementAt } from "rxjs";

export class TestSelectorsHelper {
    getAllElementWithCssSting(className: string, debugElement: DebugElement): DebugElement[] {
        return debugElement.queryAll(By.css(className))
    }
    getElementWithCssSting(className: string, debugElement: DebugElement): DebugElement {
        return debugElement.query(By.css(className))
    }
    getAllElementsByDirective(directive:any, debugElement: DebugElement): DebugElement[] {
        return debugElement.queryAll(By.directive(directive));
    }
    // checkIfElementExistsByDirective(directive: any, debugElement: DebugElement): void {
    //      const element = debugElement.query(By.directive(directive));
    //      expect(element.nativeNode).toBeTruthy();
    // }
}

import {NgModule} from '@angular/core'

import {
    MatButtonModule, 
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatExpansionModule,
    MatSelectModule,
    MatTabsModule
} from '@angular/material';

const USED_MODULES = [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatExpansionModule,
    MatSelectModule,
    MatTabsModule
]

@NgModule({
    imports: USED_MODULES,
    exports: USED_MODULES
})
export class MaterialModule { }
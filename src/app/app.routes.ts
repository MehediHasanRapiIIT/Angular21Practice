import { Routes } from '@angular/router';
import { DataBindings } from './components/data-bindings/data-bindings';
import { Signal } from './components/signal/signal';
import { Variables } from './components/variables/variables';
import { NotFound } from './components/not-found/not-found';
import { ControllFlow } from './components/controll-flow/controll-flow';
import { DynamicCssClass } from './components/dynamic-css-class/dynamic-css-class';
import { BatchMaster } from './components/batch-master/batch-master';

export const routes: Routes = [

    {
        path:'',
        redirectTo: 'data-binding',
        pathMatch: 'full'
    },

    {
        path: 'data-binding',
        component: DataBindings
    },
    {
        path: 'signal',
        component: Signal
    },
    {
        path: 'variables',
        component: Variables
    },
    {
        path: 'controll-flow',
        component: ControllFlow
    },
    {
        path: 'dyamic-component',
        component: DynamicCssClass
    },
    {
        path: 'batch',
        component: BatchMaster
    },
    {
        path: '**',
        component: NotFound
    }

];

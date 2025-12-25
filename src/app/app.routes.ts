import { Routes } from '@angular/router';
import { DataBindings } from './components/data-bindings/data-bindings';
import { Signal } from './components/signal/signal';
import { Variables } from './components/variables/variables';
import { NotFound } from './components/not-found/not-found';
import { ControllFlow } from './components/controll-flow/controll-flow';
import { DynamicCssClass } from './components/dynamic-css-class/dynamic-css-class';
import { BatchMaster } from './components/batch-master/batch-master';
import { ProjectCompetation } from './components/project-competation/project-competation';
import { SignalFormEx } from './components/signal-form-ex/signal-form-ex';
import { Login } from './components/login/login';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [

    {
        path:'',
        redirectTo: 'login',
        pathMatch: 'full'
    },

    {
        path: 'data-binding',
        component: DataBindings
    },
    {
        path: 'signal',
        component: Signal,
        canActivate: [authGuard]
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
        component: BatchMaster,
        canActivate: [authGuard]
    },
    {
        path: 'competation',
        component: ProjectCompetation
    },
    {
        path: 'signal-form',
        component: SignalFormEx
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: '**',
        component: NotFound
    }

];

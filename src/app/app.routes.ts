import { Routes } from '@angular/router';
import { HomeComponent } from './website/pages/home/home.component';
import { MainLayoutComponent } from './website/pages/main-layout/main-layout.component';
import { GuidelineComponent } from './website/pages/guideline/guideline.component';
import { AdvertisementsComponent } from './website/pages/advertisements/advertisements.component';
import { TeacherComponent } from './website/pages/teacher/teacher.component';
import { InstituteComponent } from './website/pages/institute/institute.component';
import { TCreateProfileComponent } from './website/pages/t-create-profile/t-create-profile.component';
import { TViewProfileComponent } from './website/pages/t-view-profile/t-view-profile.component';
import { TOpportunityComponent } from './website/pages/t-opportunity/t-opportunity.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '',
        component: MainLayoutComponent,
        children:[
            {
                path: 'home',
                component: HomeComponent,
            },
            {
                path: 'guideline',
                component: GuidelineComponent
            },
            {
                path: 'advertisement',
                component: AdvertisementsComponent
            },
            {
                path: 'teachers',
                component: TeacherComponent,
                children: [
                    {
                        path: 'create-account',
                        component: TCreateProfileComponent
                    },
                    {
                        path: 'view-profile',
                        component: TViewProfileComponent
                    },
                    {
                        path: 'opportunities',
                        component: TOpportunityComponent
                    },
                ]
            },
            {
                path: 'institution',
                component: InstituteComponent
            },
        ]
    },
];

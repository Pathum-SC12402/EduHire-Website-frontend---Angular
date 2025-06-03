import { Routes } from '@angular/router';
import { HomeComponent } from './website/pages/home/home.component';
import { MainLayoutComponent } from './website/pages/main-layout/main-layout.component';
import { GuidelineComponent } from './website/pages/guideline/guideline.component';
import { AdvertisementsComponent } from './website/pages/advertisements/advertisements.component';
import { TeacherComponent } from './website/pages/teacher/teacher.component';
import { InstituteComponent } from './website/pages/institute/institute.component';
import { TViewProfileComponent } from './website/pages/t-view-profile/t-view-profile.component';
import { TOpportunityComponent } from './website/pages/t-opportunity/t-opportunity.component';
import { SignupComponent } from './website/components/auth/signup/signup.component';
import { SigninComponent } from './website/components/auth/signin/signin.component';
import { VerificationComponent } from './website/components/auth/verification/verification.component';
import { TpLayoutComponent } from './website/components/teacherFunction/teacherCreateProfile/tp-layout/tp-layout.component';
import { ToLayerComponent } from './website/components/teacherFunction/teacherOpportunities/to-layer/to-layer.component';
import { IpLayoutComponent } from './website/components/instituteFunction/instituteCreateProfile/ip-layout/ip-layout.component';
import { SViewProfileComponent } from './website/pages/s-view-profile/s-view-profile.component';
import { SApplicationComponent } from './website/pages/s-application/s-application.component';

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
                        path: 'signin',
                        component: SigninComponent
                    },
                    {
                        path: 'signup',
                        component: SignupComponent
                    },
                    {
                        path: 'verify-email',
                        component: VerificationComponent
                    },
                    {
                        path: 'create-profile',
                        component: TpLayoutComponent
                    },
                    {
                        path: 'view-profile',
                        component: TViewProfileComponent
                    },
                ]
            },
            {
                path: 'institution',
                component: InstituteComponent,
                children: [
                    {
                        path: 'signin',
                        component: SigninComponent
                    },
                    {
                        path: 'signup',
                        component: SignupComponent
                    },
                    {
                        path: 'verify-email',
                        component: VerificationComponent
                    },
                    {
                        path: 'create-profile',
                        component: IpLayoutComponent
                    },
                    {
                        path: 'view-profile',
                        component: SViewProfileComponent
                    },
                ]
            },
        ]
    },
    {
        path: 'teacher-opportunity',
        component: TOpportunityComponent,
        children: [
            {
                path: 'details/:id',
                component: ToLayerComponent
            },
        ]
    },
    {
        path: 'applications',
        component: SApplicationComponent
    }
];

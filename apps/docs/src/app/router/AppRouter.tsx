import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { Home } from '@/pages/home-page';

const ToggleButtonPage = lazy(() => import('@/pages/toggle-button').then(module => ({ default: module.ToggleButtonPage })));
const ButtonGroupPage = lazy(() => import('@/pages/button-group').then(module => ({ default: module.ButtonGroupPage })));
const SplitButtonPage = lazy(() => import('@/pages/split-button').then(module => ({ default: module.SplitButtonPage })));
const ConfirmButtonPage = lazy(() => import('@/pages/confirm-button').then(module => ({ default: module.ConfirmButtonPage })));
const HoldToConfirmPage = lazy(() => import('@/pages/hold-to-confirm').then(module => ({ default: module.HoldToConfirmPage })));

const TextPage = lazy(() => import('@/pages/text').then(module => ({ default: module.TextPage })));
const HeadingPage = lazy(() => import('@/pages/heading').then(module => ({ default: module.HeadingPage })));
const SeparatorPage = lazy(() => import('@/pages/separator').then(module => ({ default: module.SeparatorPage })));
const BadgePage = lazy(() => import('@/pages/badge').then(module => ({ default: module.BadgePage })));
const CardPage = lazy(() => import('@/pages/card').then(module => ({ default: module.CardPage })));
const BoxPage = lazy(() => import('@/pages/box').then(module => ({ default: module.BoxPage })));
const FlexPage = lazy(() => import('@/pages/flex').then(module => ({ default: module.FlexPage })));
const GridPage = lazy(() => import('@/pages/grid').then(module => ({ default: module.GridPage })));
const StackPage = lazy(() => import('@/pages/stack').then(module => ({ default: module.StackPage })));
const ScrollAreaPage = lazy(() => import('@/pages/scroll-area').then(module => ({ default: module.ScrollAreaPage })));
const ButtonPage = lazy(() => import('@/pages/button').then(module => ({ default: module.ButtonPage })));
const InputPage = lazy(() => import('@/pages/input').then(module => ({ default: module.InputPage })));
const TextareaPage = lazy(() => import('@/pages/textarea').then(module => ({ default: module.TextareaPage })));
const CheckboxPage = lazy(() => import('@/pages/checkbox').then(module => ({ default: module.CheckboxPage })));
const SwitchPage = lazy(() => import('@/pages/switch').then(module => ({ default: module.SwitchPage })));
const RadioGroupPage = lazy(() => import('@/pages/radio-group').then(module => ({ default: module.RadioGroupPage })));
const SelectPage = lazy(() => import('@/pages/select').then(module => ({ default: module.SelectPage })));
const SliderPage = lazy(() => import('@/pages/slider').then(module => ({ default: module.SliderPage })));
const FieldPage = lazy(() => import('@/pages/field').then(module => ({ default: module.FieldPage })));
const FormControlPage = lazy(() => import('@/pages/form-control').then(module => ({ default: module.FormControlPage })));
const LinkPage = lazy(() => import('@/pages/link').then(module => ({ default: module.LinkPage })));
const ButtonLinkPage = lazy(() => import('@/pages/button-link').then(module => ({ default: module.ButtonLinkPage })));
const BreadcrumbsPage = lazy(() => import('@/pages/breadcrumbs').then(module => ({ default: module.BreadcrumbsPage })));
const TabsPage = lazy(() => import('@/pages/tabs').then(module => ({ default: module.TabsPage })));
const AccordionPage = lazy(() => import('@/pages/accordion').then(module => ({ default: module.AccordionPage })));
const PaginationPage = lazy(() => import('@/pages/pagination').then(module => ({ default: module.PaginationPage })));
const DialogPage = lazy(() => import('@/pages/dialog').then(module => ({ default: module.DialogPage })));
const DrawerPage = lazy(() => import('@/pages/drawer').then(module => ({ default: module.DrawerPage })));
const PopoverPage = lazy(() => import('@/pages/popover').then(module => ({ default: module.PopoverPage })));
const TooltipPage = lazy(() => import('@/pages/tooltip').then(module => ({ default: module.TooltipPage })));
const DropdownMenuPage = lazy(() => import('@/pages/dropdown-menu').then(module => ({ default: module.DropdownMenuPage })));
const AlertPage = lazy(() => import('@/pages/alert').then(module => ({ default: module.AlertPage })));
const ToastPage = lazy(() => import('@/pages/toast').then(module => ({ default: module.ToastPage })));
const SpinnerPage = lazy(() => import('@/pages/spinner').then(module => ({ default: module.SpinnerPage })));
const ProgressPage = lazy(() => import('@/pages/progress').then(module => ({ default: module.ProgressPage })));
const SkeletonPage = lazy(() => import('@/pages/skeleton').then(module => ({ default: module.SkeletonPage })));
const AvatarPage = lazy(() => import('@/pages/avatar').then(module => ({ default: module.AvatarPage })));
const TablePage = lazy(() => import('@/pages/table').then(module => ({ default: module.TablePage })));
const OverviewPage = lazy(() => import('@/pages/overview').then(module => ({ default: module.OverviewPage })));
const AboutPage = lazy(() => import('@/pages/about').then(module => ({ default: module.AboutPage })));
const RecipesPage = lazy(() => import('@/pages/recipes').then(module => ({ default: module.RecipesPage })));
const NotFoundPage = lazy(() => import('@/pages/not-found').then(module => ({ default: module.NotFoundPage })));

export function AppRouter() {
  return (<Routes>
          <Route path='/' element={<Home />} />
          <Route path='/docs/components/text' element={<TextPage />} />
          <Route path='/docs/components/heading' element={<HeadingPage />} />
          <Route path='/docs/components/separator' element={<SeparatorPage />} />
          <Route path='/docs/components/badge' element={<BadgePage />} />
          <Route path='/docs/components/card' element={<CardPage />} />
          <Route path='/docs/components/box' element={<BoxPage />} />
          <Route path='/docs/components/flex' element={<FlexPage />} />
          <Route path='/docs/components/grid' element={<GridPage />} />
          <Route path='/docs/components/stack' element={<StackPage />} />
          <Route path='/docs/components/scroll-area' element={<ScrollAreaPage />} />
          <Route path='/docs/components/button' element={<ButtonPage />} />
          <Route path='/docs/components/toggle-button' element={<ToggleButtonPage />} />
          <Route path='/docs/components/button-group' element={<ButtonGroupPage />} />
          <Route path='/docs/components/split-button' element={<SplitButtonPage />} />
          <Route path='/docs/components/confirm-button' element={<ConfirmButtonPage />} />
          <Route path='/docs/components/hold-to-confirm' element={<HoldToConfirmPage />} />
          <Route path='/docs/components/input' element={<InputPage />} />
          <Route path='/docs/components/textarea' element={<TextareaPage />} />
          <Route path='/docs/components/checkbox' element={<CheckboxPage />} />
          <Route path='/docs/components/switch' element={<SwitchPage />} />
          <Route path='/docs/components/radio-group' element={<RadioGroupPage />} />
          <Route path='/docs/components/select' element={<SelectPage />} />
          <Route path='/docs/components/slider' element={<SliderPage />} />
          <Route path='/docs/components/field' element={<FieldPage />} />
          <Route path='/docs/components/form-control' element={<FormControlPage />} />
          <Route path='/docs/components/link' element={<LinkPage />} />
          <Route path='/docs/components/button-link' element={<ButtonLinkPage />} />
          <Route path='/docs/components/breadcrumbs' element={<BreadcrumbsPage />} />
          <Route path='/docs/components/tabs' element={<TabsPage />} />
          <Route path='/docs/components/accordion' element={<AccordionPage />} />
          <Route path='/docs/components/pagination' element={<PaginationPage />} />
          <Route path='/docs/components/dialog' element={<DialogPage />} />
          <Route path='/docs/components/drawer' element={<DrawerPage />} />
          <Route path='/docs/components/popover' element={<PopoverPage />} />
          <Route path='/docs/components/tooltip' element={<TooltipPage />} />
          <Route path='/docs/components/dropdown-menu' element={<DropdownMenuPage />} />
          <Route path='/docs/components/alert' element={<AlertPage />} />
          <Route path='/docs/components/toast' element={<ToastPage />} />
          <Route path='/docs/components/spinner' element={<SpinnerPage />} />
          <Route path='/docs/components/progress' element={<ProgressPage />} />
          <Route path='/docs/components/skeleton' element={<SkeletonPage />} />
          <Route path='/docs/components/avatar' element={<AvatarPage />} />
          <Route path='/docs/components/table' element={<TablePage />} />
          <Route path='/docs' element={<OverviewPage />} />
          <Route path='/docs/about' element={<AboutPage />} />
          <Route path='/docs/recipes' element={<RecipesPage />} />
          <Route path='/docs/*' element={<NotFoundPage />} />
          <Route path='/docs/components' element={<Navigate to='/docs/components/button' replace />} />
          <Route path='*' element={<Home />} />
        </Routes>);
}

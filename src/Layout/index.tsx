import React, { ReactNode, useEffect } from 'react';

//import actions
import {
    changeLayout,
    changeSidebarTheme,
    changeLayoutMode,
    changeLayoutWidth,
    changeLayoutPosition,
    changeTopbarTheme,
    changeLeftsidebarSizeType,
    changeLeftsidebarViewType,
    changeSidebarImageType,
    changeBodyImageType
} from "slices/thunk";

//redux
import { useSelector, useDispatch } from "react-redux";
import Header from './Header';
import Sidebar from './Sidebar';
import RightSidebar from './RightSidebar';
import Footer from './Footer';
import TopBar from './TopBar';

import { selectCurrentUser } from "../features/affiliate/authAffiliateSlice";
import { RootState } from "../app/store"; // Import your RootState interface

interface LayoutProps {
    children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
    const user = useSelector((state: RootState) => selectCurrentUser(state));

    const dispatch: any = useDispatch();
    const {
        layoutType,
        leftSidebarType,
        layoutModeType,
        layoutWidthType,
        layoutPositionType,
        topbarThemeType,
        leftsidbarSizeType,
        leftSidebarViewType,
        leftSidebarImageType,
        bodyImageType
    } = useSelector((state: any) => ({
        layoutType: state.Layout.layoutType,
        leftSidebarType: state.Layout.leftSidebarType,
        layoutModeType: state.Layout.layoutModeType,
        layoutWidthType: state.Layout.layoutWidthType,
        layoutPositionType: state.Layout.layoutPositionType,
        topbarThemeType: state.Layout.topbarThemeType,
        leftsidbarSizeType: state.Layout.leftsidbarSizeType,
        leftSidebarViewType: state.Layout.leftSidebarViewType,
        leftSidebarImageType: state.Layout.leftSidebarImageType,
        bodyImageType: state.Layout.bodyImageType
    }));

    /*
    layout settings
    */
    useEffect(() => {
        if (
            layoutType ||
            leftSidebarType ||
            layoutModeType ||
            layoutWidthType ||
            layoutPositionType ||
            topbarThemeType ||
            leftsidbarSizeType ||
            leftSidebarViewType ||
            leftSidebarImageType ||
            bodyImageType
        ) {
            window.dispatchEvent(new Event('resize'));
            dispatch(changeLeftsidebarViewType(leftSidebarViewType));
            dispatch(changeLeftsidebarSizeType(leftsidbarSizeType));
            dispatch(changeLayoutMode(layoutModeType));
            dispatch(changeSidebarTheme(leftSidebarType));
            dispatch(changeLayoutWidth(layoutWidthType));
            dispatch(changeLayoutPosition(layoutPositionType));
            dispatch(changeTopbarTheme(topbarThemeType));
            dispatch(changeLayout(layoutType));
            dispatch(changeSidebarImageType(leftSidebarImageType));
            dispatch(changeBodyImageType(bodyImageType));
        }
    }, [layoutType,
        leftSidebarType,
        layoutModeType,
        layoutWidthType,
        layoutPositionType,
        topbarThemeType,
        leftsidbarSizeType,
        leftSidebarViewType,
        leftSidebarImageType,
        bodyImageType,
        dispatch]);

    return (
        <React.Fragment>
            <div id="layout-wrapper">
                <Header />
                <Sidebar layoutType={layoutType} />
                <div className="main-content">
                    {children}
                    <Footer />
                </div>
            </div>
            <RightSidebar />
        </React.Fragment>
    );
}

export default Layout;
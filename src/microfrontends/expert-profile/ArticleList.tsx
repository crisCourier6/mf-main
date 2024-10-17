import React, { Suspense, lazy } from "react";
import { CircularProgress } from "@mui/material";
// @ts-ignore
const MFArticleList = lazy(() => import("MFEXPERT/ArticleList"))

const ArticleList: React.FC<{ isAppBarVisible: boolean, canCreateArticle:boolean }> = ({ isAppBarVisible, canCreateArticle }) => {
    return (
        <div>
            <Suspense fallback={<CircularProgress/>}>
                <MFArticleList isAppBarVisible={isAppBarVisible} canCreateArticle={canCreateArticle}/>
            </Suspense>
        </div>
    )
}

export default ArticleList
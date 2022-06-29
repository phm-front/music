import { useRoutes, Navigate } from "react-router-dom";
import { createElement } from "react";
import FindMusic from '@/pages/findMusic/FindMusic'
import Recommend from '@/pages/recommend/Recommend'
import Mine from '@/pages/mine/Mine'
import Friend from '@/pages/friend/Friend'
import Download from '@/pages/download/Download'

export function useRoutesConfig () {
  const element = useRoutes([
    {
      path: '/',
      element: createElement(Navigate, { to: '/discover' })
    },
    {
      path: '/discover',
      element: createElement(FindMusic),
      children: [
        {
          index: true,
          element: createElement(Navigate, { to: 'recommend' })
        },
        {
          path: "recommend",
          element: createElement(Recommend),
        },
      ]
    },
    {
      path: '/mine',
      element: createElement(Mine)
    },
    {
      path: '/friend',
      element: createElement(Friend)
    },
    {
      path: '/download',
      element: createElement(Download)
    }
  ])
  return element
}

import { useRoutes } from "react-router";
import { createElement } from "react";
import FindMusic from '@/pages/findMusic/FindMusic'

export function useRoutesConfig () {
  const element = useRoutes([
    { path: '/', element: createElement(FindMusic) }
  ])
  return element
}

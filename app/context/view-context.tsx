import { createContext, useState } from 'react';
import { ViewEnum } from 'app/enums/view-enums';

export const ViewContext = createContext({
  current_view: ViewEnum.INPUT_INITIAL_NUMBER,
  set_current_view: (view: ViewEnum) => {view}
})

export const ViewProvider = ({children}: {children: React.ReactNode}) => {
  const [current_view, set_current_view] = useState(ViewEnum.INPUT_INITIAL_NUMBER)

  return (
    <ViewContext.Provider value={{current_view, set_current_view}}>
      { children }
    </ViewContext.Provider>
  )
}




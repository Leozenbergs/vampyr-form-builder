import { ApplicationRoutes } from '../router/ApplicationRoutes';
import { ApplicationBar } from '../components/app/ApplicationBar';


export const Default = () => {

  return (
    <>
      <ApplicationBar>
        <ApplicationRoutes />
      </ApplicationBar>
    </>
  )
}
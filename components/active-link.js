import {withRouter} from 'next/router'

function ActiveLink(props) {
    let {activeClass, router, route} = props 

    let classLink = router.pathname == route ? activeClass : ""

    return (
        <div className={classLink}>
            {props.children}
        </div>
    )
}

export default withRouter(ActiveLink)


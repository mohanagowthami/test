
export const size = {
    mobileMaxWidth: '767px',
    tabletMinWidth: '768px',
    tabletMaxWidth: '1023px',
    desktopMinWidth: '1024px'
}

export const device = {
    mobile: `max-width:${size.mobileMaxWidth}`,
    tablet: `(min-width:${size.tabletMinWidth}) and (max-width:${size.tabletMaxWidth})`,
    desktop: `min-width:${size.desktopMinWidth}`
};
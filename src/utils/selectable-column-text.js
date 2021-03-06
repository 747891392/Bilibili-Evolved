const style = `.article-holder { user-select: text !important }`
const id = 'selectable-column-text-style'
const load = () => {
  resources.applyStyleFromText(style, id)
  SpinQuery.unsafeJquery().then(async () => {
    if (!unsafeWindow.$) {
      return
    }
    await SpinQuery.select('.article-holder')
    unsafeWindow.$('.article-holder').unbind('copy')
  })
}
load()
export default {
  reload: load,
  unload: () => {
    document.getElementById(id).remove()
  },
}
const URL = 'https://minitumblr.com'

export default content =>
  window.open(
    `http://twitter.com/share?url=${encodeURIComponent(
      URL,
    )}&text=${encodeURIComponent(content)}`,
    '',
    'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0',
  )

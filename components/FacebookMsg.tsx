"use client"
import { FacebookProvider, CustomChat } from 'react-facebook';

const FacebookMsg = () => {
  return (
    <FacebookProvider appId="693535332839361" chatSupport>
        <CustomChat pageId="2101933179920348" minimized={true}/>
    </FacebookProvider>
  )
}

export default FacebookMsg

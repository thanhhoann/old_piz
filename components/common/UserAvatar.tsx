import { Avatar } from '@chakra-ui/react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect, useState } from 'react'
import InfoSection from '../profile/InfoSection'

type UserAvatarProps = {
  url?: string | null
  size: number
  onUpload: Function
}

export default function UserAvatar({ url, size, onUpload }: UserAvatarProps) {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null)
  const [uploading, setUploading] = useState<boolean | undefined>(false)
  const supabase = createClientComponentClient()

  useEffect(() => {
    if (url) downloadImage(url)
  }, [url])

  async function downloadImage(path: string) {
    try {
      const { data, error } = await supabase.storage.from('avatars').download(path)
      if (error) {
        throw error
      }
      const url = URL.createObjectURL(data)
      setAvatarUrl(url)
    } catch (error: any) {
      console.log('Error downloading image: ', error.message)
    }
  }

  async function uploadAvatar(event: any) {
    try {
      setUploading(true)

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error('You must select an image to upload.')
      }

      const file = event.target.files[0]
      const fileExt = file.name.split('.').pop()
      const fileName = `${Math.random()}.${fileExt}`
      const filePath = `${fileName}`

      const { error: uploadError } = await supabase.storage.from('avatars').upload(filePath, file)

      if (uploadError) {
        throw uploadError
      }

      onUpload(event, filePath)
    } catch (error: any) {
      alert(error.message)
    } finally {
      setUploading(false)
    }
  }

  return (
    <div>
      {avatarUrl ? <InfoSection avatarURL={avatarUrl} /> : <div className="avatar no-image" style={{ height: size, width: size }} />}

      {/* <div style={{ width: size }}> */}
      {/*   <label className="button primary block" htmlFor="single"> */}
      {/*     {uploading ? 'Uploading ...' : 'Upload'} */}
      {/*   </label> */}
      {/*   <input */}
      {/*     style={{ */}
      {/*       visibility: 'hidden', */}
      {/*       position: 'absolute', */}
      {/*     }} */}
      {/*     type="file" */}
      {/*     id="single" */}
      {/*     accept="image/*" */}
      {/*     onChange={uploadAvatar} */}
      {/*     disabled={uploading} */}
      {/*   /> */}
      {/* </div> */}
    </div>
  )
}

"use client"
import { Button } from '@nextui-org/button'
import React from 'react'
import handleDownload from './DownloadZip'
import { Modal,ModalContent,ModalHeader,ModalBody,ModalFooter,useDisclosure } from '@nextui-org/modal'
const DownloadBtn = () => {
  return (
    <div>
       <Button color="primary" onClick={()=>handleDownload()}>
        <span>Download now</span>
      </Button>
    </div>
  )
}

export default DownloadBtn

"use client"
import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import Link from "next/link";

const DownLoadBtn=()=> {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button 
      color="primary"
      onPress={onOpen}>Download(Demo)</Button>
      <Modal 
      isOpen={isOpen} 
      onOpenChange={onOpenChange}
      scrollBehavior="inside"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 font-bold text-slate-100">Modal Title</ModalHeader>
              <ModalBody className="text-slate-100">
                <p className="flex gap-4">Download link-<Link 
                className="text-blue-700"
                target="_blank"
                href="https://drive.google.com/drive/folders/1laQXvb4zOxEBdQQhTGFIvGCToIpnvvBJ">
                  Game setup
                </Link></p>
                
                <p>
                  <img 
                  className="w-96 rounded-md"
                  alt="download_guide 1"
                  src="https://raw.githubusercontent.com/prasannashrestha011/ImageRepository/main/uploads/Screenshot%20(121).png"/>
                </p>
                <p>
                  <img 
                  className="w-96 rounded-md"
                  alt="download_guide 2"
                  src="https://raw.githubusercontent.com/prasannashrestha011/ImageRepository/main/uploads/Screenshot%20(123).png"
                  />
                </p>
                <p className="flex justify-center items-center flex-col">
                  <img 
                  className="w-64 rounded-md"
                  src="https://raw.githubusercontent.com/prasannashrestha011/ImageRepository/main/uploads/Screenshot%20(124).png"/>
                      <p className="text-red-600 text-sm">
                        Please Ignore the windows warning
                      </p>
                </p>
                
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
export default DownLoadBtn;
import React from "react";
import { Fragment } from "react";
import ReactDOM from "react-dom";

const Backdrop = (props: any) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-screen z-20 bg-neutral-200 bg-opacity-50"
      onClick={props.onClose}
    />
  );
};

const ModalOverlay = (props: any) => {
  return (
    <div className="flex justify-center bg-red-400 ">
      <div className="fixed bg-white p-4 z-30 mt-[10%] rounded-lg">
        <div className="w-[600px] ">
          {props.children}
        </div>
      </div>
    </div>
  );
};

//https://stackoverflow.com/questions/63520680/argument-of-type-htmlelement-null-is-not-assignable-to-parameter-of-type-el
const portalElement =
  document.getElementById("overlays")!;

const Modal = (props: any) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>
          {props.children}
        </ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;

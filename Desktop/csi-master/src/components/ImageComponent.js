import React from "react";
import "./ImageComponent.css";

export default function ImageComponent() {
  return (
    <div>
      <h4 className="mt-1 text-center">Tech-O-Pedia</h4>
      <div className="image-component-main">
        <div class="gallery-div">
          <div class="div1">
            <img
              src="https://i.pinimg.com/originals/a0/e4/1e/a0e41ed6f4accd5f7ac4b755c187476f.jpg"
              alt=""
            />
          </div>
          <div class="div2">
            <div class="div21">
              <img
                src="https://www.localguidesconnect.com/t5/image/serverpage/image-id/999337i22CF399E12581612/image-size/large?v=v2&px=999"
                alt=""
              />
            </div>
            <div class="div22">
              <img
                src="https://lh3.googleusercontent.com/d0y1e7kDfTKgxzmbyL_3wcxKz6HFlWaiC0SUfEGChnQjN8mUwfqTA5eJ3zm0UPUoGct8oc6S-YAqitnfYTfb8mroKHom42v3Vob7A4ae=rw-e365-w1200-v1"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="view-more">
          <button
            className=" btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            View More
          </button>
        </div>
      </div>

      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-scrollable ">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Tech-O-Pedia
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <img
                src="https://lh3.googleusercontent.com/d0y1e7kDfTKgxzmbyL_3wcxKz6HFlWaiC0SUfEGChnQjN8mUwfqTA5eJ3zm0UPUoGct8oc6S-YAqitnfYTfb8mroKHom42v3Vob7A4ae=rw-e365-w1200-v1"
                alt=""
              />{" "}
              <img
                src="https://lh3.googleusercontent.com/d0y1e7kDfTKgxzmbyL_3wcxKz6HFlWaiC0SUfEGChnQjN8mUwfqTA5eJ3zm0UPUoGct8oc6S-YAqitnfYTfb8mroKHom42v3Vob7A4ae=rw-e365-w1200-v1"
                alt=""
              />{" "}
              <img
                src="https://lh3.googleusercontent.com/d0y1e7kDfTKgxzmbyL_3wcxKz6HFlWaiC0SUfEGChnQjN8mUwfqTA5eJ3zm0UPUoGct8oc6S-YAqitnfYTfb8mroKHom42v3Vob7A4ae=rw-e365-w1200-v1"
                alt=""
              />{" "}
              <img
                src="https://lh3.googleusercontent.com/d0y1e7kDfTKgxzmbyL_3wcxKz6HFlWaiC0SUfEGChnQjN8mUwfqTA5eJ3zm0UPUoGct8oc6S-YAqitnfYTfb8mroKHom42v3Vob7A4ae=rw-e365-w1200-v1"
                alt=""
              />{" "}
              <img
                src="https://lh3.googleusercontent.com/d0y1e7kDfTKgxzmbyL_3wcxKz6HFlWaiC0SUfEGChnQjN8mUwfqTA5eJ3zm0UPUoGct8oc6S-YAqitnfYTfb8mroKHom42v3Vob7A4ae=rw-e365-w1200-v1"
                alt=""
              />
              <img
                src="https://i.pinimg.com/originals/a0/e4/1e/a0e41ed6f4accd5f7ac4b755c187476f.jpg"
                alt=""
              />
              <img
                src="https://i.pinimg.com/originals/a0/e4/1e/a0e41ed6f4accd5f7ac4b755c187476f.jpg"
                alt=""
              />
              <img
                src="https://i.pinimg.com/originals/a0/e4/1e/a0e41ed6f4accd5f7ac4b755c187476f.jpg"
                alt=""
              />
              <img
                src="https://i.pinimg.com/originals/a0/e4/1e/a0e41ed6f4accd5f7ac4b755c187476f.jpg"
                alt=""
              />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

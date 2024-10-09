import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export default function CreateRfq() {
  return (
    <>
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="website-content overflow-auto">
          <div className="module-data-section p-4">
            <a href="">
              Home &gt; Purchase &gt; Procurement &gt; Create RFQ &amp; Auction
            </a>
            <h5 className="mt-4">Create RFQ &amp; Auction</h5>
            <div className="row my-4 align-items-center">
              <div className="head-material text-center">
                <h4>Create RFQ &amp; Auction</h4>
              </div>
              <div className="mor-tabs mt-4">
                <ul
                  className="nav nav-pills mb-3 justify-content-center"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link "
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home"
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                      MOR (1/4)
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                    >
                      MOR Approval
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-contact-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-contact"
                      type="button"
                      role="tab"
                      aria-controls="pills-contact"
                      aria-selected="false"
                    >
                      Acceptance
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="pills-contact-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-contact"
                      type="button"
                      role="tab"
                      aria-controls="pills-contact"
                      aria-selected="false"
                    >
                      Auction / RFQ
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-contact-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-contact"
                      type="button"
                      role="tab"
                      aria-controls="pills-contact"
                      aria-selected="false"
                    >
                      PO
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-contact-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-contact"
                      type="button"
                      role="tab"
                      aria-controls="pills-contact"
                      aria-selected="false"
                    >
                      Acceptance
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-contact-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-contact"
                      type="button"
                      role="tab"
                      aria-controls="pills-contact"
                      aria-selected="false"
                    >
                      Advance
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-contact-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-contact"
                      type="button"
                      role="tab"
                      aria-controls="pills-contact"
                      aria-selected="false"
                    >
                      Material Received
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-contact-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-contact"
                      type="button"
                      role="tab"
                      aria-controls="pills-contact"
                      aria-selected="false"
                    >
                      Billing
                    </button>
                  </li>
                </ul>
              </div>
              <div className="tab-content mor-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <div className="container-fluid">
                    <div className="row">
                      <div className="card-body">
                        <div className="row align-items-end justify-items-end">
                          <div className="col-md-4 mt-0">
                            <div className="form-group">
                              <label className="po-fontBold">Event Type</label>
                            </div>
                            <input
                              className="form-control "
                              data-bs-toggle="modal"
                              data-bs-target="#zenithModal"
                              placeholder="+ Select [RFQ / Auction]"
                            />
                          </div>
                          <div className="col-md-4 mt-0">
                            <div className="form-group">
                              <label className="po-fontBold">Event No.</label>
                              <input
                                className="form-control"
                                type="text"
                                placeholder="Neo Valley"
                              />
                            </div>
                          </div>
                          <div className="col-md-4 mt-0">
                            <div className="form-group">
                              <label className="po-fontBold">Created On</label>
                              <input
                                className="form-control"
                                type="text"
                                placeholder="Materia"
                              />
                            </div>
                          </div>
                          <div className="col-md-4 mt-2">
                            <div className="form-group">
                              <label className="po-fontBold">
                                Material Type
                              </label>
                              <input
                                className="form-control"
                                type="text"
                                placeholder="05-02-2024"
                              />
                            </div>
                          </div>
                          <div className="col-md-4 mt-2">
                            <div className="form-group">
                              <label className="po-fontBold">
                                Event Schedule
                              </label>
                            </div>
                            <input
                              className="form-control "
                              data-bs-toggle="modal"
                              data-bs-target="#oenithModal"
                              placeholder="From [dd-mm-yy hh:mm] To [dd-mm-yy hh:mm] ([DD] Days
                                                          [HH] Hrs [MM] Mins)"
                            />
                          </div>
                          <div className="col-md-4 mt-2 ">
                            <button className="purple-btn1 m-0">
                              <a href="./erp-material-order-request-create.html">
                                <span className="material-symbols-outlined align-text-top">
                                  add
                                </span>
                                Additional Vendor Fields
                              </a>
                            </button>
                          </div>
                        </div>
                        <div className="mt-3">
                          <div className="d-flex justify-content-between align-items-center">
                            <h5 className=" mb-0">Order Summery</h5>
                            <button
                              type="submit"
                              className="btn btn-md"
                              data-bs-toggle="modal"
                              data-bs-target="#settings"
                            >
                              <svg
                                width={22}
                                height={24}
                                viewBox="0 0 22 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M10.9985 7.45532C8.64565 7.45532 6.73828 9.36269 6.73828 11.7155C6.73828 14.0684 8.64565 15.9757 10.9985 15.9757C13.3514 15.9757 15.2587 14.0684 15.2587 11.7155C15.2587 9.36269 13.3514 7.45532 10.9985 7.45532ZM8.86838 11.7155C8.86838 10.5391 9.82208 9.58544 10.9985 9.58544C12.1749 9.58544 13.1286 10.5391 13.1286 11.7155C13.1286 12.892 12.1749 13.8457 10.9985 13.8457C9.82208 13.8457 8.86838 12.892 8.86838 11.7155Z"
                                  fill="#8B0203"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M14.3416 2.97635C13.8887 -0.992103 8.10872 -0.992127 7.65577 2.97635L7.56116 3.80528C7.46818 4.61997 6.60664 5.12268 5.84081 4.79072L5.07295 4.45788C1.43655 2.88166 -1.52087 7.83752 1.73283 10.2351L2.40609 10.7312C3.07122 11.2213 3.07122 12.2099 2.40609 12.7L1.73283 13.1961C-1.52085 15.5936 1.43653 20.5496 5.07295 18.9733L5.84081 18.6405C6.60664 18.3085 7.46818 18.8113 7.56116 19.6259L7.65577 20.4549C8.10872 24.4233 13.8887 24.4233 14.3416 20.4549L14.4362 19.6259C14.5292 18.8113 15.3908 18.3085 16.1565 18.6405L16.9244 18.9733C20.5609 20.5495 23.5183 15.5936 20.2645 13.1961L19.5913 12.7C18.9262 12.2099 18.9262 11.2213 19.5913 10.7312L20.2645 10.2351C23.5183 7.83753 20.5609 2.88164 16.9244 4.45788L16.1566 4.79072C15.3908 5.12268 14.5292 4.61997 14.4362 3.8053L14.3416 2.97635ZM9.77214 3.2179C9.93768 1.76752 12.0597 1.7675 12.2252 3.2179L12.3198 4.04684C12.5762 6.29253 14.9347 7.64199 17.0037 6.74512L17.7716 6.41228C19.1548 5.81273 20.1484 7.67469 19.001 8.52023L18.3278 9.01632C16.5072 10.3578 16.5072 13.0734 18.3278 14.4149L19.001 14.911C20.1484 15.7566 19.1548 17.6185 17.7716 17.019L17.0037 16.686C14.9347 15.7891 12.5762 17.1386 12.3198 19.3843L12.2252 20.2133C12.0597 21.6636 9.93768 21.6638 9.77214 20.2133L9.67753 19.3843C9.42121 17.1386 7.06273 15.7891 4.99366 16.686L4.22578 17.019C2.84258 17.6185 1.84896 15.7566 2.99644 14.911L3.66969 14.4149C5.49017 13.0734 5.49015 10.3578 3.66969 9.01632L2.99642 8.52021C1.84898 7.67471 2.84256 5.81271 4.2258 6.4123L4.99366 6.74512C7.06273 7.64199 9.42121 6.29253 9.67753 4.04684L9.77214 3.2179Z"
                                  fill="#8B0203"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="tbl-container px-0 mt-3">
                          <table className="w-100">
                            <thead>
                              <tr>
                                <th>
                                  <input type="checkbox" />
                                </th>
                                <th>Company</th>
                                <th>Project</th>
                                <th>Sub-Project</th>
                                <th>MOR No.</th>
                                <th>Material Sub-Type</th>
                                <th>Material</th>
                                <th>Material Description</th>
                                <th>Material Specifications</th>
                                <th>UOM</th>
                                <th>Order Qty</th>
                                <th>Min Qty</th>
                                <th>Tick Size</th>
                                <th>Price Cap</th>
                                <th>Price</th>
                                <th>Discount %</th>
                                <th>Discounted Rate</th>
                                <th>Qty Available</th>
                                <th>Participant Attachment</th>
                                <th>CGST</th>
                                <th>SGST</th>
                                <th>IGST</th>
                                <th>Total Amount</th>
                                <th>Vendor Remarks</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <input type="checkbox" />
                                </td>
                                <td>MNRL</td>
                                <td>NeoValley</td>
                                <td>Neo Valley- Building</td>
                                <td>MOR/MAR/MAX/ 101/02/2024</td>
                                <td>Tiles</td>
                                <td>Plain white Tiles</td>
                                <td>Plain White Sperenza Tiles</td>
                                <td>300 x 300 mm</td>
                                <td>Nos</td>
                                <td>10000</td>
                                <td />
                                <td />
                                <td />
                                <td />
                                <td />
                                <td />
                                <td />
                                <td />
                                <td />
                                <td />
                                <td />
                                <td />
                                <td />
                              </tr>
                              <tr>
                                <td>
                                  <input type="checkbox" />
                                </td>
                                <td>MNRL</td>
                                <td>NeoValley</td>
                                <td>Neo Valley- Building</td>
                                <td>MOR/MAR/MAX/ 101/02/2024</td>
                                <td>Tiles</td>
                                <td>Plain white Tiles</td>
                                <td>Plain White Sperenza Tiles</td>
                                <td>300 x 300 mm</td>
                                <td>Nos</td>
                                <td>10000</td>
                                <td />
                                <td />
                                <td />
                                <td />
                                <td />
                                <td />
                                <td />
                                <td />
                                <td />
                                <td />
                                <td />
                                <td />
                                <td />
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      {/* form-select EXAMPLE */}
                    </div>
                    <div className="row">
                      <div className="card pb-3">
                        <div className="card-header">
                          <h3 className="card-title">Order Details</h3>
                          <div className="card-tools">
                            <button
                              type="button"
                              className="btn btn-tool"
                              data-card-widget="collapse"
                              fdprocessedid="7rbmxj"
                            >
                              <svg
                                width={32}
                                height={32}
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <circle cx={16} cy={16} r={16} fill="#8B0203" />
                                <path
                                  d="M16 24L9.0718 12L22.9282 12L16 24Z"
                                  fill="white"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="card-body ">
                          <div
                            className="card card-default"
                            id="mor-material-details"
                          >
                            <div className="card-header">
                              <h3 className="card-title">
                                Material Details (1/2)
                              </h3>
                              <div className="card-tools">
                                <button
                                  type="button"
                                  className="btn btn-tool"
                                  data-card-widget="collapse"
                                  fdprocessedid="7rbmxj"
                                >
                                  <svg
                                    width={32}
                                    height={32}
                                    viewBox="0 0 32 32"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <circle
                                      cx={16}
                                      cy={16}
                                      r={16}
                                      fill="#8B0203"
                                    />
                                    <path
                                      d="M16 24L9.0718 12L22.9282 12L16 24Z"
                                      fill="white"
                                    />
                                  </svg>
                                </button>
                              </div>
                            </div>
                            {/* /.card-header */}
                            <div
                              className="card-body1 p-3"
                              style={{ display: "none" }}
                            >
                              <div className="row">
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label className="po-fontBold">
                                      MOR No
                                    </label>
                                    <input
                                      className="form-control"
                                      type="text"
                                      placeholder="MOR/MAR/101/02/2024"
                                      fdprocessedid="vn2c2n"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label className="po-fontBold">
                                      Material
                                    </label>
                                    <input
                                      className="form-control"
                                      type="text"
                                      placeholder="Plain grey tiles"
                                      fdprocessedid="vn2c2n"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label className="po-fontBold">
                                      Order Qty
                                    </label>
                                    <input
                                      className="form-control"
                                      type="text"
                                      placeholder={12000}
                                      fdprocessedid="vn2c2n"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card-body">
                              <div className="row">
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label>Compony</label>
                                    <select
                                      className="form-control form-select"
                                      style={{ width: "100%" }}
                                    >
                                      <option selected="selected">MNRL</option>
                                      <option>Alaska</option>
                                      <option>California</option>
                                      <option>Delaware</option>
                                      <option>Tennessee</option>
                                      <option>Texas</option>
                                      <option>Washington</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label>Project</label>
                                    <select
                                      className="form-control form-select"
                                      style={{ width: "100%" }}
                                    >
                                      <option selected="selected">
                                        Neo-valley
                                      </option>
                                      <option>Alaska</option>
                                      <option>California</option>
                                      <option>Delaware</option>
                                      <option>Tennessee</option>
                                      <option>Texas</option>
                                      <option>Washington</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label>Sub-Project</label>
                                    <select
                                      className="form-control form-select"
                                      style={{ width: "100%" }}
                                    >
                                      <option selected="selected">
                                        NeoValley- Building
                                      </option>
                                      <option>Alaska</option>
                                      <option>California</option>
                                      <option>Delaware</option>
                                      <option>Tennessee</option>
                                      <option>Texas</option>
                                      <option>Washington</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div className="row mt-4">
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label>MOR Number</label>
                                    <input
                                      className="form-control"
                                      type="text"
                                      placeholder="MOR/MAR/101/02/2024"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label>Material Sub Type</label>
                                    <input
                                      className="form-control"
                                      type="text"
                                      placeholder="Tiles"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label>Material</label>
                                    <input
                                      className="form-control"
                                      type="text"
                                      placeholder="Plain white tiles"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="row mt-4">
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label>UOM</label>
                                    <input
                                      className="form-control"
                                      type="text"
                                      placeholder="Nos"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label>Order Qty</label>
                                    <input
                                      className="form-control"
                                      type="text"
                                      placeholder={10000}
                                    />
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label>Minimum Tick Size</label>
                                    <input
                                      className="form-control"
                                      type="text"
                                      placeholder=""
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="row mt-4">
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label>Price Cap</label>
                                    <input
                                      className="form-control"
                                      type="text"
                                      placeholder="Nos"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label>Tick Size %age</label>
                                    <input
                                      className="form-control"
                                      type="text"
                                      placeholder={10000}
                                    />
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label>Vendor Enable Fields</label>
                                    <select
                                      className="form-control form-select"
                                      style={{ width: "100%" }}
                                    >
                                      <option selected="selected">
                                        5 Fields Selected
                                      </option>
                                      <option>Alaska</option>
                                      <option>California</option>
                                      <option>Delaware</option>
                                      <option>Tennessee</option>
                                      <option>Texas</option>
                                      <option>Washington</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-md-6 mt-2">
                                  <div className="form-group">
                                    <label>Material Specification</label>
                                    <textarea
                                      className="form-control"
                                      rows={3}
                                      placeholder="Enter ..."
                                      defaultValue={""}
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6 mt-2">
                                  <div className="form-group">
                                    <label>Material Description</label>
                                    <textarea
                                      className="form-control"
                                      rows={3}
                                      placeholder="Enter ..."
                                      defaultValue={""}
                                    />
                                  </div>
                                </div>
                                <div className=" d-flex justify-content-between align-items-center mt-2">
                                  <h5 className=" mt-3">Document Attachment</h5>
                                  <button
                                    className="purple-btn2 m-0"
                                    data-bs-toggle="modal"
                                    data-bs-target="#file_attchement"
                                  >
                                    <svg
                                      width={16}
                                      height={17}
                                      viewBox="0 0 16 17"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M15.1892 16.0745H0.794209C0.364012 16.0745 0 15.7435 0 15.3133V8.03309C0 7.61944 0.347466 7.27197 0.794209 7.27197C1.24095 7.27197 1.58842 7.60289 1.58842 8.03309V14.5688H14.4116V8.03309C14.4116 7.61944 14.759 7.27197 15.2058 7.27197C15.6525 7.27197 16 7.60289 16 8.03309V15.3133C15.9669 15.727 15.6194 16.0745 15.1892 16.0745Z"
                                        fill="white"
                                      />
                                      <path
                                        d="M11.6318 3.28438L8.57081 0.223371C8.27298 -0.0744571 7.7766 -0.0744571 7.46222 0.223371L4.36812 3.28438C4.2192 3.4333 4.13647 3.63185 4.13647 3.84695C4.13647 4.06205 4.2192 4.24405 4.36812 4.39297C4.51703 4.54188 4.71558 4.62461 4.91414 4.62461C5.12924 4.62461 5.32779 4.54188 5.4767 4.39297L7.1644 2.72182V10.5812C7.1644 11.0445 7.52841 11.4085 7.9917 11.4085C8.45498 11.4085 8.819 11.0445 8.819 10.5812V2.68873L10.5232 4.39297C10.8211 4.6908 11.3174 4.6908 11.6318 4.39297C11.7807 4.24405 11.8635 4.0455 11.8635 3.84695C11.8635 3.63185 11.7807 3.4333 11.6318 3.28438Z"
                                        fill="white"
                                      />
                                    </svg>
                                    <span className="ms-2">
                                      Attchment File{" "}
                                    </span>
                                  </button>
                                </div>
                                <div className="  mt-2">
                                  <div className="tbl-container px-0  m-0">
                                    <table className="w-100">
                                      <thead className="w-100">
                                        <tr>
                                          <th className="main2-th">Sr. No.</th>
                                          <th className="main2-th">
                                            Document Name
                                          </th>
                                          <th className="main2-th">
                                            File Name
                                          </th>
                                          <th className="main2-th">
                                            File Type
                                          </th>
                                          <th className="main2-th">
                                            Upload Date
                                          </th>
                                          <th className="main2-th">Action</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <th>1</th>
                                          <td>03-03-2024</td>
                                          <th>MTO Copy.pdf</th>
                                          <td>03-03-2024</td>
                                          <th>MTO Copy.pdf</th>
                                          <td>
                                            <i
                                              className="fa-regular fa-eye"
                                              data-bs-toggle="modal"
                                              data-bs-target="#document_attchment"
                                              style={{ fontSize: 18 }}
                                            />
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mt-2">
                                  <h5 className=" ">Delivery Schedule</h5>
                                  <div className="card-tools">
                                    <button className="purple-btn2">
                                      <span className="material-symbols-outlined align-text-top me-2">
                                        add{" "}
                                      </span>
                                      <span>Add</span>
                                    </button>
                                  </div>
                                </div>
                                <div className="tbl-container px-0 mt-3 mx-2">
                                  <table className="w-100">
                                    <thead>
                                      <tr>
                                        <th>PO Delivery Date</th>
                                        <th>Sch. Delivery Qty</th>
                                        <th>Supplier Delivery Date</th>
                                        <th>Supplier Delivery Qty</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>10-04-2024</td>
                                        <td>40</td>
                                        <td />
                                        <td />
                                      </tr>
                                      <tr>
                                        <td>10-04-2024</td>
                                        <td />
                                        <td />
                                        <td />
                                      </tr>
                                      <tr>
                                        <td>10-04-2024</td>
                                        <td />
                                        <td />
                                        <td />
                                      </tr>
                                      <tr>
                                        <td>10-04-2024</td>
                                        <td />
                                        <td />
                                        <td />
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                                <div className="d-flex justify-content-between mt-2">
                                  <h5 className=" ">
                                    Special Terms &amp; Conditions
                                  </h5>
                                </div>
                                <div className="form-group">
                                  <textarea
                                    className="form-control"
                                    rows={5}
                                    placeholder=""
                                    defaultValue={""}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* form-select EXAMPLE */}
                          <div
                            className="card card-default mt-4"
                            id="mor-material-details"
                          >
                            <div className="card-header">
                              <h3 className="card-title">
                                Material Details (2/2)
                              </h3>
                              <div className="card-tools">
                                <button
                                  type="button"
                                  className="btn btn-tool"
                                  data-bs-toggle="modal"
                                  data-bs-target="#"
                                  data-card-widget="collapse"
                                  fdprocessedid="7rbmxj"
                                >
                                  <svg
                                    width={32}
                                    height={32}
                                    viewBox="0 0 32 32"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <circle
                                      cx={16}
                                      cy={16}
                                      r={16}
                                      fill="#8B0203"
                                    />
                                    <path
                                      d="M16 24L9.0718 12L22.9282 12L16 24Z"
                                      fill="white"
                                    />
                                  </svg>
                                </button>
                              </div>
                            </div>
                            <div
                              className="card-body1 p-3"
                              style={{ display: "none" }}
                            >
                              <div className="row">
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label className="po-fontBold">
                                      MOR No
                                    </label>
                                    <input
                                      className="form-control"
                                      type="text"
                                      placeholder="MOR/MAR/101/02/2024"
                                      fdprocessedid="vn2c2n"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label className="po-fontBold">
                                      Material
                                    </label>
                                    <input
                                      className="form-control"
                                      type="text"
                                      placeholder="Plain grey tiles"
                                      fdprocessedid="vn2c2n"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label className="po-fontBold">
                                      Order Qty
                                    </label>
                                    <input
                                      className="form-control"
                                      type="text"
                                      placeholder={12000}
                                      fdprocessedid="vn2c2n"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card-body">
                              {/* /.card-header */}
                              <div className="row">
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label>Compony</label>
                                    <select
                                      className="form-control form-select"
                                      style={{ width: "100%" }}
                                    >
                                      <option selected="selected">MNRL</option>
                                      <option>Alaska</option>
                                      <option>California</option>
                                      <option>Delaware</option>
                                      <option>Tennessee</option>
                                      <option>Texas</option>
                                      <option>Washington</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label>Project</label>
                                    <select
                                      className="form-control form-select"
                                      style={{ width: "100%" }}
                                    >
                                      <option selected="selected">
                                        Neo-valley
                                      </option>
                                      <option>Alaska</option>
                                      <option>California</option>
                                      <option>Delaware</option>
                                      <option>Tennessee</option>
                                      <option>Texas</option>
                                      <option>Washington</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label>Sub-Project</label>
                                    <select
                                      className="form-control form-select"
                                      style={{ width: "100%" }}
                                    >
                                      <option selected="selected">
                                        NeoValley- Building
                                      </option>
                                      <option>Alaska</option>
                                      <option>California</option>
                                      <option>Delaware</option>
                                      <option>Tennessee</option>
                                      <option>Texas</option>
                                      <option>Washington</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div className="row mt-4">
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label>MOR Number</label>
                                    <input
                                      className="form-control"
                                      type="text"
                                      placeholder="MOR/MAR/101/02/2024"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label>Material Sub Type</label>
                                    <input
                                      className="form-control"
                                      type="text"
                                      placeholder="Tiles"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label>Material</label>
                                    <input
                                      className="form-control"
                                      type="text"
                                      placeholder="Plain white tiles"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="row mt-4">
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label>UOM</label>
                                    <input
                                      className="form-control"
                                      type="text"
                                      placeholder="Nos"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label>Order Qty</label>
                                    <input
                                      className="form-control"
                                      type="text"
                                      placeholder={10000}
                                    />
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label>Minimum Tick Size</label>
                                    <input
                                      className="form-control"
                                      type="text"
                                      placeholder=""
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="row mt-4">
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label>Price Cap</label>
                                    <input
                                      className="form-control"
                                      type="text"
                                      placeholder="Nos"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label>Tick Size %age</label>
                                    <input
                                      className="form-control"
                                      type="text"
                                      placeholder={10000}
                                    />
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label>Vendor Enable Fields</label>
                                    <select
                                      className="form-control form-select"
                                      style={{ width: "100%" }}
                                    >
                                      <option selected="selected">
                                        5 Fields Selected
                                      </option>
                                      <option>Alaska</option>
                                      <option>California</option>
                                      <option>Delaware</option>
                                      <option>Tennessee</option>
                                      <option>Texas</option>
                                      <option>Washington</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-md-6 mt-2">
                                  <div className="form-group">
                                    <label>Material Specification</label>
                                    <textarea
                                      className="form-control"
                                      rows={3}
                                      placeholder="Enter ..."
                                      defaultValue={""}
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6 mt-2">
                                  <div className="form-group">
                                    <label>Material Description</label>
                                    <textarea
                                      className="form-control"
                                      rows={3}
                                      placeholder="Enter ..."
                                      defaultValue={""}
                                    />
                                  </div>
                                </div>
                                <div className=" d-flex justify-content-between align-items-center mt-2">
                                  <h5 className=" mt-3">Document Attachment</h5>
                                  <button
                                    className="purple-btn2 m-0"
                                    data-bs-toggle="modal"
                                    data-bs-target="#file_attchement"
                                  >
                                    <svg
                                      width={16}
                                      height={17}
                                      viewBox="0 0 16 17"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M15.1892 16.0745H0.794209C0.364012 16.0745 0 15.7435 0 15.3133V8.03309C0 7.61944 0.347466 7.27197 0.794209 7.27197C1.24095 7.27197 1.58842 7.60289 1.58842 8.03309V14.5688H14.4116V8.03309C14.4116 7.61944 14.759 7.27197 15.2058 7.27197C15.6525 7.27197 16 7.60289 16 8.03309V15.3133C15.9669 15.727 15.6194 16.0745 15.1892 16.0745Z"
                                        fill="white"
                                      />
                                      <path
                                        d="M11.6318 3.28438L8.57081 0.223371C8.27298 -0.0744571 7.7766 -0.0744571 7.46222 0.223371L4.36812 3.28438C4.2192 3.4333 4.13647 3.63185 4.13647 3.84695C4.13647 4.06205 4.2192 4.24405 4.36812 4.39297C4.51703 4.54188 4.71558 4.62461 4.91414 4.62461C5.12924 4.62461 5.32779 4.54188 5.4767 4.39297L7.1644 2.72182V10.5812C7.1644 11.0445 7.52841 11.4085 7.9917 11.4085C8.45498 11.4085 8.819 11.0445 8.819 10.5812V2.68873L10.5232 4.39297C10.8211 4.6908 11.3174 4.6908 11.6318 4.39297C11.7807 4.24405 11.8635 4.0455 11.8635 3.84695C11.8635 3.63185 11.7807 3.4333 11.6318 3.28438Z"
                                        fill="white"
                                      />
                                    </svg>
                                    <span className="ms-2">
                                      Attchment File{" "}
                                    </span>
                                  </button>
                                </div>
                                <div className="  mt-2">
                                  <div className="tbl-container px-0  m-0">
                                    <table className="w-100">
                                      <thead className="w-100">
                                        <tr>
                                          <th className="main2-th">Sr. No.</th>
                                          <th className="main2-th">
                                            Document Name
                                          </th>
                                          <th className="main2-th">
                                            File Name
                                          </th>
                                          <th className="main2-th">
                                            File Type
                                          </th>
                                          <th className="main2-th">
                                            Upload Date
                                          </th>
                                          <th className="main2-th">Action</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <th>1</th>
                                          <td>03-03-2024</td>
                                          <th>MTO Copy.pdf</th>
                                          <td>03-03-2024</td>
                                          <th>MTO Copy.pdf</th>
                                          <td>
                                            <i
                                              className="fa-regular fa-eye"
                                              data-bs-toggle="modal"
                                              data-bs-target="#document_attchment"
                                              style={{ fontSize: 18 }}
                                            />
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                                <div className="d-flex justify-content-between mt-2 align-items-center">
                                  <h5 className=" ">Delivery Schedule</h5>
                                  <div className="card-tools">
                                    <button className="purple-btn2">
                                      <span className="material-symbols-outlined align-text-top me-2">
                                        add{" "}
                                      </span>
                                      <span>Add</span>
                                    </button>
                                  </div>
                                </div>
                                <div className="tbl-container px-0 mt-3 mx-2">
                                  <table className="w-100">
                                    <thead>
                                      <tr>
                                        <th>PO Delivery Date</th>
                                        <th>Sch. Delivery Qty</th>
                                        <th>Supplier Delivery Date</th>
                                        <th>Supplier Delivery Qty</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>10-04-2024</td>
                                        <td>40</td>
                                        <td />
                                        <td />
                                      </tr>
                                      <tr>
                                        <td>10-04-2024</td>
                                        <td />
                                        <td />
                                        <td />
                                      </tr>
                                      <tr>
                                        <td>10-04-2024</td>
                                        <td />
                                        <td />
                                        <td />
                                      </tr>
                                      <tr>
                                        <td>10-04-2024</td>
                                        <td />
                                        <td />
                                        <td />
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                                <div className="d-flex justify-content-between mt-2">
                                  <h5 className=" ">
                                    Special Terms &amp; Conditions
                                  </h5>
                                </div>
                                <div className="form-group">
                                  <textarea
                                    className="form-control"
                                    rows={5}
                                    placeholder=""
                                    defaultValue={""}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row mt-2 justify-content-center">
                            <div className="d-flex justify-content-between align-items-end">
                              <h5 className=" ">Select Vendors</h5>
                              <div className="card-tools">
                                <button
                                  className="purple-btn2"
                                  fdprocessedid="kgmxwj"
                                  data-bs-toggle="modal"
                                  data-bs-target="#venderModal"
                                >
                                  <span className="material-symbols-outlined align-text-top me-2">
                                    add{" "}
                                  </span>
                                  <span>Add</span>
                                </button>
                              </div>
                            </div>
                            <div className="row justify-content-center">
                              <div className="tbl-container px-0 mx-3  mt-3 ">
                                <table className="w-100">
                                  <thead>
                                    <tr>
                                      <th>Vendor Name</th>
                                      <th>Mob No.</th>
                                      <th>Status</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>Vendor 1</td>
                                      <td>99999999</td>
                                      <td />
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                            <div className="d-flex justify-content-between mt-2">
                              <h5 className=" ">
                                General Terms &amp; Conditions
                              </h5>
                            </div>
                            <div className="form-group">
                              <textarea
                                className="form-control"
                                rows={5}
                                placeholder=""
                                defaultValue={""}
                              />
                            </div>
                          </div>
                          <div className="row mt-4 justify-content-end">
                            <div className="col-md-3">
                              <div className="form-group d-flex gap-3 align-items-center">
                                <label style={{ fontSize: "1.1rem" }}>
                                  status
                                </label>
                                <select
                                  className="form-control form-select"
                                  style={{ width: "100%" }}
                                >
                                  <option selected="selected">Alabama</option>
                                  <option>Alaska</option>
                                  <option>California</option>
                                  <option>Delaware</option>
                                  <option>Tennessee</option>
                                  <option>Texas</option>
                                  <option>Washington</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="row mt-2 justify-content-end">
                            <div className="col-md-2">
                              <button className="purple-btn2 w-100">
                                Preview
                              </button>
                            </div>
                            <div className="col-md-2">
                              <button className="purple-btn2 w-100">
                                Submit
                              </button>
                            </div>
                            <div className="col-md-2">
                              <button className="purple-btn1 w-100">
                                Cancel
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-2 px-4">
                      <h5>Audit Log</h5>
                      <div className="tbl-container px-0 mt-3">
                        <table className="w-100">
                          <thead>
                            <tr>
                              <th>Sr.No.</th>
                              <th>User</th>
                              <th>Date</th>
                              <th>Status</th>
                              <th>Remark</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>Pratham Shastri</td>
                              <td>15-02-2024</td>
                              <td>Verified</td>
                              <td>Verified &amp; Processed</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  {/* /.container-fluid */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
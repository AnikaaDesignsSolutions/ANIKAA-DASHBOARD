import React from "react";

// Define types for Material Design data structure
type MaterialDesignData = {
  [key: string]: {
    attach_lining?: boolean;
    design_images?: string[];
    design_preference?: string;
    design_preference_audio?: string | null;
    design_preference_video?: string | null;
    measurement_values?: Record<string, string>;
    measurement_dress_images?: string[];
  };
};

type Item = {
  title: string;
  material_design_data?: MaterialDesignData;
};

type MaterialDesignTableProps = {
  items: Item[];
};

const MaterialDesignTable: React.FC<MaterialDesignTableProps> = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <div
          key={index}
          className="item-section"
          style={{
            margin: "20px 0",
            padding: "20px",
            border: "2px solid #ccc",
            borderRadius: "8px",
            backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#e9e9e9",
          }}
        >
          <h2 style={{ textAlign: "center", fontSize:"1.5rem", fontWeight: "bold", padding: "1rem" }}>
            {`${index + 1}. ${item.title || `Item ${index + 1}`}`}
          </h2>
          <table border="1" cellPadding="10" cellSpacing="0" style={{ width: "100%" }}>
            <thead>
              <tr>
                {/* <th>Property</th>
                <th>Value</th> */}
              </tr>
            </thead>
            <tbody>
              {item.material_design_data ? (
                Object.entries(item.material_design_data).map(([url, data], i) => (
                  <React.Fragment key={i}>
                    <tr>
                      <td colSpan={2} style={{ padding: 0 }}>
                        <div
                          style={{
                            border: "2px solid #000",
                            // borderRadius: "8px",
                            padding: "20px",
                            margin: "10px 0",
                            // background:"blue"
                          }}
                        >
                          <h3 style={{ marginBottom: "10px", fontWeight: "bold", fontSize: "1.3rem" }}>{`Material Design ${i + 1}`}</h3>
                          
                          {/* Material's Image URL */}
                          <div style={{ marginBottom: "10px" }}>
                            <strong>Material's Image:</strong>{" "}
                            {url ? (
                              <a href={url} target="_blank" rel="noopener noreferrer">
                                <img src={url} alt="Material Design Image" width="100" />
                              </a>
                            ) : (
                              "N/A"
                            )}
                          </div>

                          {/* Attach Lining */}
                          {data.attach_lining !== undefined && (
                            <div style={{ margin: "15px 0" }}>
                              <strong>Attach Lining:</strong>{" "}
                              {data.attach_lining ? "Yes" : "No"}
                            </div>
                          )}

                          {/* Design Images */}
                          {data.design_images && data.design_images.length > 0 && (
                            <div style={{ margin: "15px 0" }}>
                              <strong>Design's Images:</strong>
                              {data.design_images.map((link, idx) => (
                                <div key={idx} style={{ margin: "5px 0" }}>
                                  <a href={link} target="_blank" rel="noopener noreferrer">
                                    <img src={link} alt="Design Image" width="100" />
                                  </a>
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Design Preference Audio */}
                          {data.design_preference_audio && (
                            <div style={{ margin: "15px 0" }}>
                              <strong>Design Preference Audio:</strong>
                              <audio controls style={{ marginTop: "5px" }}>
                                <source
                                  src={data.design_preference_audio}
                                  type="audio/mpeg"
                                />
                                Your browser does not support the audio element.
                              </audio>
                            </div>
                          )}

                          {/* Design Preference Video */}
                          {data.design_preference_video && (
                            <div style={{ margin: "15px 0" }}>
                              <strong>Design Preference Video:</strong>
                              <video controls width="200" style={{ marginTop: "5px" }}>
                                <source
                                  src={data.design_preference_video}
                                  type="video/mp4"
                                />
                                Your browser does not support the video element.
                              </video>
                            </div>
                          )}

                          {/* Measurement Values */}
                          {data.measurement_values &&
                            Object.keys(data.measurement_values).length > 0 && (
                              <div style={{ margin: "15px 0" }}>
                                <strong>Measurement Values:</strong>
                                <table
                                  style={{
                                    width: "100%",
                                    marginTop: "5px",
                                    borderCollapse: "collapse",
                                  }}
                                >
                                  <thead>
                                    <tr style={{ borderBottom: "2px solid #ccc" }}>
                                      <th style={{ padding: "8px", border: "1px solid #ccc" }}>Measurement</th>
                                      <th style={{ padding: "8px", border: "1px solid #ccc" }}>Value</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {Object.entries(data.measurement_values).map(
                                      ([measureKey, measureValue], idx) => (
                                        <tr key={idx} style={{ borderBottom: "1px solid #ddd" }}>
                                          <td style={{ padding: "8px", border: "1px solid #ccc" }}>{measureKey}</td>
                                          <td style={{ padding: "8px", border: "1px solid #ccc" }}>{measureValue}</td>
                                        </tr>
                                      )
                                    )}
                                  </tbody>
                                </table>
                              </div>
                            )}

                          {/* Measurement Dress's Images */}
                          {data.measurement_dress_images &&
                            data.measurement_dress_images.length > 0 && (
                              <div style={{ margin: "15px 0" }}>
                                <strong>Measurement Dress's Images:</strong>
                                {data.measurement_dress_images.map((imageURL, idx) => (
                                  <div key={idx} style={{ margin: "5px 0" }}>
                                    <a
                                      href={imageURL}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      <img
                                        src={imageURL}
                                        alt="Measurement Dress Image"
                                        width="100"
                                      />
                                    </a>
                                  </div>
                                ))}
                              </div>
                            )}
                        </div>
                      </td>
                    </tr>
                  </React.Fragment>
                ))
              ) : (
                <tr>
                  <td colSpan={2}>No material design data available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default MaterialDesignTable;

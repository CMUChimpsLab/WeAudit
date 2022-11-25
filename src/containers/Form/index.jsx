import React, { Component } from 'react';
import './index.css';
import Header from '../../components/Header';
import TagInput from '../../components/TagInput';

const radioInput = ['None', 'Low', 'Medium', 'High'];

//curl --location --request POST "https://api.imgbb.com/1/upload?expiration=600&key=f07a92335f3f0537617c876f39e5bb6e" --form "image=R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"

/*
api for question types
content request =>
document.getElementsByClassName('image-prompt-input')[0].value

var arr = document.getElementsByClassName("generated-image")
arr = [...arr] 
arr = arr.filter(x => x.parentElement.className !== 'hist-gen-img')
arr.map(x => x.getElementsByTagName('img')[0].src)

remove take screenshot
output to sheets through api
*/

//const api = 'https://peaceful-brook-47316.herokuapp.com/';
const api = 'https://peaceful-brook-47316.herokuapp.com/';

const uploadImage = async (image) => {
  const apikey = 'f07a92335f3f0537617c876f39e5bb6e';

  var formdata = new FormData();
  function renameFile(file, newName) {
    var blob = file.slice(0, file.size, file.type);
    return new File([blob], newName, { type: file.type });
  }
  formdata.append('image', renameFile(image, 'newName'));
  var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow',
  };

  let res = await fetch(
    `https://api.imgbb.com/1/upload?expiration=600&key=${apikey}`,
    requestOptions
  );

  res = await res.text();
  return JSON.parse(res)['data']['url'];
};

class Form extends Component {
  state = {
    audit: null,
    questions: [],
    submit: false,
    screenshot: false,
  };

  componentDidMount = async () => {
    let tabs = await chrome.tabs.query({ currentWindow: true, active: true });
    var activeTab = tabs[0];
    let res = await chrome.tabs.sendMessage(activeTab.id, {
      message: this.props.message,
    });
    console.log('received');
    console.log(res);
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    let preQuestions = await fetch(api, requestOptions);
    console.log(preQuestions);
    preQuestions = JSON.parse(await preQuestions.text());
    console.log(preQuestions);
    preQuestions.shift();
    const questions = preQuestions.map((arr) => {
      return {
        question: arr[0],
        subtitle: arr[1],
        type: arr[2],
      };
    });
    for (let i = 0; i < questions.length; i++) {
      let q = questions[i];
      if (q.type === 'radio') {
        q.answer = '';
      } else if (q.type === 'image') {
        q.answer = res[1];
      } else if (q.type === 'text') {
        q.answer = '';
      } else if (q.type === 'tag') {
        q.answer = {};
      }
    }
    this.setState({ questions: questions, audit: res[0] });
    /*chrome.storage.sync.get(['audit', 'questions'], (result) => {
      if (result.questions && result.questions.audit === result.audit) {
        this.setState({
          audit: result.audit,
          questions: result.questions.value,
        });
      } else {
        this.setState({ audit: result.audit });
      }
    });*/
  };

  componentDidUpdate = async (prevProps, prevState) => {
    const trueVals = (obj) => {
      var keys = Object.keys(obj);

      var filtered = keys.filter(function (key) {
        return obj[key];
      });
      return filtered.join(', ');
    };
    if (!prevState.submit && this.state.submit) {
      console.log("submit")
      let arr = [this.state.audit];
      for (let i in this.state.questions) {
        let obj = this.state.questions[i];
        if (obj.type === 'tag') {
          arr.push(trueVals(obj.answer));
        } else if (obj.type === 'image') {
          for (let i in obj.answer) {
            let url = obj.answer[i];
            arr.push(url);
          }
        } else {
          arr.push(obj.answer);
        }
      }
      var formdata = new FormData();
      formdata.append('values', JSON.stringify(arr));

      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow',
      };

      fetch(api + 'append', requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log('error', error));
      /*let imageURL = uploadImage(this.state.questions[3].image);
      var myHeaders = new Headers();
      myHeaders.append(
        'Cookie',
        'COMPASS=spreadsheet_forms=CjIACWuJV6oMhbTB2f89AG-rUPCDdZhXM9v6sXn6glHKHdBE7zT15-bUJW6HDAzIUS0OuBDmr6KWBho0AAlriVd6uv_kIxNnGPZUF8fj8rEe-brA-1kTXcOtxF4JarBmA1pkX3_mIej7Q7RgGuBf3w==; S=spreadsheet_forms=WkXIjlPDQWAhtJQBWPi0uVu8T3pEjTqDm44MhbTHCMs; NID=511=AQ95EzWJK0kSi0pDRPUGjGRSulG4fMqajQRnZx8NP9BzWFnUHtBT_wZ9sBsfkj031D7M6qfsdLlqY4aIP9qxfaXoioDLHdLP37ZVSBmEptSagvMAdsCNugcPxPmqS39NWtnQYWTelkHKQUGbcTxmNyfwnWUi75-ysb3R58bnWic'
      );

      var urlencoded = new URLSearchParams();

      let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow',
      };

      const trueVals = (obj) => {
        var keys = Object.keys(obj);

        var filtered = keys.filter(function (key) {
          return obj[key];
        });
        return filtered.join(', ');
      };

      fetch(
        `https://docs.google.com/forms/u/0/d/e/1FAIpQLSe-DxqET6mO6DpRSqCmbfaeA2y9v0wNOTyuh-aEaU1OY2h8IQ/formResponse?entry.621496508=${trueVals(
          this.state.questions[1].answer
        )}&entry.1074554267=${this.state.questions[2].answer}&entry.366340186=${
          this.state.questions[0].answer
        }&entry.145596681=${imageURL}`,
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log('error', error));*/
    }
  };

  render() {
    document.body.style.height = '580px';
    document.body.style.width = '400px';

    if (this.state.submit) {
      return (
        <div className="App">
          <span className="e5478_20810">
            <svg
              width="6"
              height="10"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => {
                this.props.setPage('Home');
              }}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.78033 0.209209C6.07322 0.488155 6.07322 0.940416 5.78033 1.21936L1.81066 5L5.78033 8.78064C6.07322 9.05958 6.07322 9.51185 5.78033 9.79079C5.48744 10.0697 5.01256 10.0697 4.71967 9.79079L0.21967 5.50508C-0.0732233 5.22613 -0.0732233 4.77387 0.21967 4.49492L4.71967 0.209209C5.01256 -0.0697365 5.48744 -0.0697365 5.78033 0.209209Z"
                fill="black"
              />
            </svg>
            <b
              onClick={() => {
                this.props.setPage('Home');
              }}
              style={{ marginLeft: '9px' }}
            >
              Audit: {this.state.audit}
            </b>
          </span>
          <div className="e6405_24573">
            <span className="e5479_22888">Thank you for auditing!</span>
            <span className="e5479_22889">
              <svg
                width="38"
                height="29"
                viewBox="0 0 38 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.1641 27.4375C13.8672 28.1406 15.0625 28.1406 15.7656 27.4375L36.4375 6.76562C37.1406 6.0625 37.1406 4.86719 36.4375 4.16406L33.9062 1.63281C33.2031 0.929688 32.0781 0.929688 31.375 1.63281L14.5 18.5078L6.55469 10.6328C5.85156 9.92969 4.72656 9.92969 4.02344 10.6328L1.49219 13.1641C0.789062 13.8672 0.789062 15.0625 1.49219 15.7656L13.1641 27.4375Z"
                  fill="#088962"
                />
              </svg>
            </span>
            <div className="e5479_22890" />
            <div className="e5479_22891">
              <span className="e5479_22892">
                See discussion for this project
              </span>
            </div>
          </div>

          <Header setPage={this.props.setPage} />
        </div>
      );
    }
    return (
      <div className="App">
        <span className="e5478_20810">
          <svg
            width="6"
            height="10"
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => {
              this.props.setPage('Home');
            }}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.78033 0.209209C6.07322 0.488155 6.07322 0.940416 5.78033 1.21936L1.81066 5L5.78033 8.78064C6.07322 9.05958 6.07322 9.51185 5.78033 9.79079C5.48744 10.0697 5.01256 10.0697 4.71967 9.79079L0.21967 5.50508C-0.0732233 5.22613 -0.0732233 4.77387 0.21967 4.49492L4.71967 0.209209C5.01256 -0.0697365 5.48744 -0.0697365 5.78033 0.209209Z"
              fill="black"
            />
          </svg>
          <b
            style={{ marginLeft: '9px' }}
            onClick={() => {
              this.props.setPage('Home');
            }}
          >
            Audit: {this.state.audit}
          </b>
          <div className="e5479_23158">
            {/*<span className="e6175_24760">
              <b>{this.state.audit}</b>
              <svg
                style={{ marginLeft: '6px', top: '5px' }}
                width="10"
                height="11"
                viewBox="0 0 10 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.12191 1.10545C1.19041 1.02326 1.26166 1 1.3119 1H4.96548C5.01572 1 5.08697 1.02326 5.15547 1.10545C5.22618 1.19031 5.27738 1.322 5.27738 1.47429V1.96143C5.27738 2.23757 5.50124 2.46143 5.77738 2.46143C6.05352 2.46143 6.27738 2.23757 6.27738 1.96143V1.47429C6.27738 1.10977 6.1575 0.74584 5.92369 0.465269C5.68767 0.18204 5.34589 0 4.96548 0H1.3119C0.931487 0 0.589716 0.182039 0.353691 0.465269C0.119882 0.74584 0 1.10977 0 1.47429V5.85857C0 6.22308 0.119882 6.58702 0.353691 6.86759C0.589715 7.15082 0.931487 7.33286 1.3119 7.33286H1.71786C1.994 7.33286 2.21786 7.109 2.21786 6.83286C2.21786 6.55672 1.994 6.33286 1.71786 6.33286H1.3119C1.26166 6.33286 1.19041 6.3096 1.12191 6.2274C1.0512 6.14255 1 6.01085 1 5.85857V1.47429C1 1.322 1.0512 1.19031 1.12191 1.10545ZM3.8418 4.88444C3.8418 4.53327 4.06293 4.41016 4.1537 4.41016H7.80727C7.89805 4.41016 8.11918 4.53327 8.11918 4.88444V9.26873C8.11918 9.6199 7.89805 9.74301 7.80727 9.74301H4.1537C4.06293 9.74301 3.8418 9.6199 3.8418 9.26873V4.88444ZM4.1537 3.41016C3.34767 3.41016 2.8418 4.15945 2.8418 4.88444V9.26873C2.8418 9.99372 3.34767 10.743 4.1537 10.743H7.80727C8.61331 10.743 9.11918 9.99372 9.11918 9.26873V4.88444C9.11918 4.15945 8.61331 3.41016 7.80727 3.41016H4.1537Z"
                  fill="#222222"
                />
              </svg>
            </span>
          <br />*/}
            {this.state.questions.map((q, i) => {
              if (q.type === 'radio') {
                return (
                  <React.Fragment key={i}>
                    <div className="question" key={i}>
                      <span className="b6175_24760">
                        {i + 1}. {q.question}
                      </span>
                      <br />
                      {q.subtitle && (
                        <span className="e6175_24757">
                          You are always welcome to report cases which you are
                          not sure if that count as algorithm bias!
                        </span>
                      )}
                      <br />
                      <div className="radio">
                        {radioInput.map((key, index) => {
                          return (
                            <div className="e6175_24775" key={key}>
                              <div
                                className="e6175_24776"
                                style={{ zIndex: 0 }}
                                onClick={() => {
                                  console.log('click');
                                  let qArr = this.state.questions;
                                  qArr[i].answer = key;
                                  this.setState({ questions: qArr });
                                }}
                              >
                                {key === q.answer ? (
                                  <div className="e6175_24787"></div>
                                ) : null}
                              </div>
                              <span className="e6175_24777">{key}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <br />
                  </React.Fragment>
                );
              } else if (q.type === 'tag') {
                return (
                  <React.Fragment key={i}>
                    <div className="question">
                      <span className="b6175_24760">
                        {i + 1}. {q.question}
                      </span>
                      <div
                        style={{
                          marginTop: '10px',
                          position: 'relative',
                        }}
                      >
                        <TagInput
                          checkbox={this.state.questions[i].answer}
                          setAnswer={(val) => {
                            let qArr = this.state.questions;
                            qArr[i].answer = val;
                            this.setState({ questions: qArr });
                          }}
                        />
                      </div>
                    </div>
                    <br />
                  </React.Fragment>
                );
              } else if (q.type === 'shortText') {
                return (
                  <React.Fragment key={i}>
                    <div className="question">
                      <span className="b6175_24760">
                        {i + 1}. {q.question}
                      </span>
                      <br />
                      <div style={{ marginTop: '0px', marginLeft: '17px' }}>
                        <input
                          rows="1"
                          className="input"
                          value={q.answer}
                          onChange={(e) => {
                            let qArr = this.state.questions;
                            qArr[i].answer = e.target.value;
                            this.setState({ questions: qArr });
                          }}
                        />
                      </div>
                    </div>
                    <br />
                  </React.Fragment>
                );
              } else if (q.type === 'text') {
                return (
                  <React.Fragment key={i}>
                    <div className="question">
                      <span className="b6175_24760">
                        {i + 1}. {q.question}
                      </span>
                      <br />
                      <div style={{ marginTop: '10px', marginLeft: '17px' }}>
                        <textarea
                          rows="3"
                          value={q.answer}
                          onChange={(e) => {
                            let qArr = this.state.questions;
                            qArr[i].answer = e.target.value;
                            this.setState({ questions: qArr });
                          }}
                        ></textarea>
                      </div>
                    </div>
                    <br />
                  </React.Fragment>
                );
              } else if (q.type === 'image') {
                return (
                  <React.Fragment key={i}>
                    <div className="question">
                      <span className="b6175_24760">
                        {i + 1}. {q.question}
                      </span>
                      <br />
                      <div style={{ marginTop: '10px', marginLeft: '17px' }}>
                        {q.answer &&
                          q.answer.map((url) => (
                            <img
                              key={url}
                              alt="target"
                              src={url}
                              className="custom-image"
                            />
                          ))}
                        {this.state.screenshot && (
                          <img
                            alt="target"
                            src={this.state.screenshot}
                            className="custom-image"
                          />
                        )}
                        <br />
                        <label
                          className="custom-file-upload"
                          style={{ float: 'left' }}
                        >
                          <input
                            multiple={false}
                            type="file"
                            accept="image/png, image/jpeg"
                            onChange={(event) => {
                              if (event.target.files && event.target.files[0]) {
                                let reader = new FileReader();
                                reader.onload = (e) => {
                                  let qArr = this.state.questions;
                                  qArr[i].answer = [e.target.result];
                                  qArr[i].image = event.target.files[0];
                                  this.setState({ questions: qArr });
                                };
                                reader.readAsDataURL(event.target.files[0]);
                              }
                            }}
                          />
                          + Add Screenshot
                        </label>
                        <label
                          className="custom-file-upload"
                          style={{ left: '60px' }}
                          onClick={async () => {
                            /*const onCaptured = (imageUri) => {
                              console.log(imageUri);
                              this.setState({ screenshot: imageUri });
                            };

                            const onError = (error) => {
                              console.log(`Error: ${error}`);
                            };
                            let capturing = chrome.tabs.captureVisibleTab();
                            capturing.then(onCaptured, onError);*/
                            /*let tabs = await chrome.tabs.query({
                              currentWindow: true,
                              active: true,
                            });
                            var activeTab = tabs[0];
                            let res = chrome.tabs.sendMessage(activeTab.id, {
                              message: 'screenshot',
                            });
                            window.close();*/
                          }}
                        >
                          Take Screenshot
                        </label>
                      </div>
                    </div>
                  </React.Fragment>
                );
              }
              return null;
            })}
            {/*           
            
            */}
            <br />
            <div
              className="e5479_23173"
              style={{}}
              onClick={async () => {
                this.setState({ submit: true });
                /*let tabs = await chrome.tabs.query({
                  currentWindow: true,
                  active: true,
                });
                var activeTab = tabs[0];
                let res = chrome.tabs.sendMessage(activeTab.id, {
                  message: 'screenshot',
                });
                window.close();*/
              }}
            >
              <span className="e5479_23174">Submit</span>
            </div>
          </div>
          <br />
        </span>
        <Header setPage={this.props.setPage} />
      </div>
    );
  }
}

export default Form;

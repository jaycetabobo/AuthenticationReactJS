import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import './App.css';
import { useEffect, useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [emailText, setEmailText] = useState("");
  const [passwordText, setPasswordText] = useState("");
  const [passwordConfirmText, setPasswordConfirmText] = useState("");
  const [emailColor, setEmailColor] = useState("gray");
  const [passwordColor, setPasswordColor] = useState("gray");
  const [passwordConfirmColor, setPasswordConfirmColor] = useState("gray");
  const regexTest = email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  const [showPassword, setShowPassword] = useState(false)

  useEffect(() => {
    if (regexTest) {
      setEmailColor("gray")
      setEmailText("")
    } else if (email.length === 0) {
      setEmailColor("gray")
      setEmailText("")
    } else {
      setEmailColor("failure");
      setEmailText("Please enter a valid email address.")
    }
  }, [email]);

  useEffect(() => {
    if (password.length > 0 && password.length <= 8) {
      setPasswordColor("failure")
      setPasswordText("Your Password is Weak")
    } else if (password.length >= 8 && password.length <= 15) {
      setPasswordColor("warning")
      setPasswordText("Your Password is Moderate")
    } else if (password.length >= 15) {
      setPasswordColor("success")
      setPasswordText("Your Password is Strong")
    } else {
      setPasswordColor("gray")
      setPasswordText("")
    }
  }, [password]);

  useEffect(() => {
    if (passwordConfirm === password) {
      setPasswordConfirmColor("gray")
      setPasswordConfirmText("")
    } else if (passwordConfirm.length === 0) {
      setPasswordConfirmColor("gray")
      setPasswordConfirmText("")
    } else {
      setPasswordConfirmColor("failure")
      setPasswordConfirmText("Password didn't match!")
    }
  }, [passwordConfirm]);


  return (
    <div className="App-header">
      <form className="flex w-80 flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput id="email1" type="email" placeholder="name@flowbite.com" required color={emailColor}
            helperText={
              <>
                {emailText}
              </>
            }
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <div className='flex flex-row justify-center items-center'>

          </div>
          <TextInput id="password1" type={showPassword ? 'text' : 'password'} required color={passwordColor}
            helperText={
              <>
                {passwordText}
              </>
            }
            value={password}
            onChange={(event) => setPassword(event.target.value)} />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2" value="Your password Confirmation" />
          </div>
          <TextInput id="password2" type={showPassword ? 'text' : 'password'} required color={passwordConfirmColor}
            helperText={
              <>
                {passwordConfirmText}
              </>
            }
            value={passwordConfirm}
            onChange={(event) => setPasswordConfirm(event.target.value)} />
        </div>
        <div className="ml-2" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <Button>Hide</Button> : <Button>Show</Button>}
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Privacy and Policy</Label>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default App;

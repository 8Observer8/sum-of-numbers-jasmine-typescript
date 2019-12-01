import { Output } from "./Output";
import Kata from "./Kata";

class Program
{
    public static Main(): void
    {
        let result = Kata.Add(5, 6);

        Output.Instance.Print("result: " + result);
    }
}

// Debug Version
Program.Main();

// Release Version
// window.onload = () => Program.Main();

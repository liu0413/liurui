using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class NumberDisplay : MonoBehaviour
{
    public TMP_Text numberText;
    private int currentNumber = 0;
    // Start is called before the first frame update
    public void IncreaseNumber()
    {
        currentNumber++;
        UpdateNumberText();
    }

    public void DecreaseNumber()
    {
        currentNumber--;
        UpdateNumberText();
    }

    private void UpdateNumberText()
    {
        Debug.Log("currentNumber"+currentNumber);

        numberText.text = "Number: " + currentNumber.ToString();
    }
    void Start()
    {
        UpdateNumberText();
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}

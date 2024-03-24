using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class play_game : MonoBehaviour
{
    public GameObject objectToSpawn;
    public Transform parentTransform;
    // Start is called before the first frame update
    void Start()
    {
    }

    // Update is called once per frame
    void Update()
    {
        
    }
    public void OnClick()
    {
        Debug.Log("Button Clicked!"); // 在点击按钮时输出日志
        // 在这里添加您想要执行的操作
        GameObject game_object = Instantiate(objectToSpawn, transform.position, transform.rotation);
        game_object.SetActive(true);
        game_object.transform.position = new Vector3(0, 3.325f, 2.561f);
        game_object.transform.rotation = Quaternion.Euler(90, 0, 0);
        game_object.transform.localScale = new Vector3(0.3f, 0.03f, 0.3f);
        game_object.transform.SetParent(parentTransform, true);
    }
}
